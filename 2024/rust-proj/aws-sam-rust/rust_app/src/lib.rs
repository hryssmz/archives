use std::env;
use std::error::Error;
use std::fs::{self, File};
use std::io::Write;
use std::path::{Path, PathBuf};

use aws_config::BehaviorVersion;
use aws_lambda_events::encodings::Body;
use aws_lambda_events::event::apigw::{ApiGatewayProxyRequest, ApiGatewayProxyResponse};
use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_s3::Client as S3Client;
use http::header::ACCESS_CONTROL_ALLOW_ORIGIN;
use http::{HeaderMap, HeaderValue};
use lambda_runtime::LambdaEvent;
use serde::{Deserialize, Serialize};

use c2pa::{create_signer, Manifest, ManifestStore, SigningAlg};

#[derive(Debug, Deserialize, Serialize)]
struct RequestBody {
    source_key: String,
    dest_key: String,
    manifest_key: String,
    signcert_key: String,
    pkey_key: String,
}

fn embed_manifest<P>(
    source_path: P,
    dest_path: P,
    manifest_json: String,
    signcert_path: P,
    pkey_path: P,
    alg: SigningAlg,
    tsa_url: Option<String>,
) -> Result<String, Box<dyn Error>>
where
    P: AsRef<Path>,
{
    let mut manifest = Manifest::from_json(&manifest_json)?;
    let signer = create_signer::from_files(signcert_path, pkey_path, alg, tsa_url)?;
    manifest.embed(&source_path, &dest_path, &*signer)?;

    let manifest_json_out = serde_json::to_string_pretty(&manifest)?;
    Ok(manifest_json_out)
}

pub fn extract_manifest<P>(path: P) -> Result<String, Box<dyn Error>>
where
    P: AsRef<Path>,
{
    let manifest_store = ManifestStore::from_file(&path)?;
    let manifest = manifest_store.get_active().unwrap();
    let manifest_json = serde_json::to_string_pretty(&manifest)?;

    Ok(manifest_json)
}

async fn download_object<S, P>(
    client: &S3Client,
    bucket: S,
    key: S,
    file_path: P,
) -> Result<usize, Box<dyn Error>>
where
    S: Into<String>,
    P: AsRef<Path>,
{
    let mut pathbuf = PathBuf::new();
    pathbuf.push(file_path);
    fs::create_dir_all(pathbuf.parent().unwrap()).unwrap();
    let mut file = File::create(pathbuf)?;
    let mut object = client.get_object().bucket(bucket).key(key).send().await?;

    let mut byte_count = 0_usize;
    while let Some(bytes) = object.body.try_next().await? {
        file.write_all(&bytes)?;
        byte_count += bytes.len();
    }
    Ok(byte_count)
}

async fn upload_object<S, P>(
    client: &S3Client,
    bucket: S,
    key: S,
    file_path: P,
) -> Result<(), Box<dyn Error>>
where
    S: Into<String>,
    P: AsRef<Path>,
{
    let body = ByteStream::from_path(file_path).await?;
    client
        .put_object()
        .bucket(bucket)
        .key(key)
        .body(body)
        .send()
        .await?;
    Ok(())
}

pub async fn function_handler(
    event: LambdaEvent<ApiGatewayProxyRequest>,
) -> Result<ApiGatewayProxyResponse, Box<dyn Error>> {
    let payload = event.payload;
    tracing::info!("{}", serde_json::to_string_pretty(&payload).unwrap());
    let req_body: RequestBody = serde_json::from_str(&payload.body.unwrap())?;

    let mut headers = HeaderMap::new();
    headers.insert(ACCESS_CONTROL_ALLOW_ORIGIN, HeaderValue::from_static("*"));

    let config = aws_config::load_defaults(BehaviorVersion::latest()).await;
    let client = S3Client::new(&config);
    let bucket = env::var("BUCKET")?;

    let work_dir = "/tmp";
    let source_path = Path::new(work_dir).join(&req_body.source_key);
    let manifest_path = Path::new(work_dir).join(&req_body.manifest_key);
    let dest_path = Path::new(work_dir).join(&req_body.dest_key);
    let signcert_path = Path::new(work_dir).join(&req_body.signcert_key);
    let pkey_path = Path::new(work_dir).join(&req_body.pkey_key);

    download_object(&client, &bucket, &req_body.source_key, &source_path).await?;
    download_object(&client, &bucket, &req_body.manifest_key, &manifest_path).await?;
    download_object(&client, &bucket, &req_body.signcert_key, &signcert_path).await?;
    download_object(&client, &bucket, &req_body.pkey_key, &pkey_path).await?;

    let manifest_json = fs::read_to_string(&manifest_path).unwrap();
    let manifest_json_out = embed_manifest(
        &source_path,
        &dest_path,
        manifest_json,
        &signcert_path,
        &pkey_path,
        SigningAlg::Es256,
        None,
    )?;

    upload_object(&client, &bucket, &req_body.dest_key, &dest_path).await?;
    let response = ApiGatewayProxyResponse {
        status_code: 200,
        headers,
        multi_value_headers: HeaderMap::new(),
        body: Some(Body::Text(manifest_json_out)),
        is_base64_encoded: false,
    };
    tracing::info!("{}", serde_json::to_string_pretty(&response).unwrap());
    Ok(response)
}

#[cfg(test)]
mod test;
