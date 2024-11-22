use c2pa::{create_signer, Manifest, ManifestStore, SigningAlg};
use pyo3::exceptions::PyException;
use pyo3::prelude::*;

#[pyfunction]
fn embed_manifest(
    source_path: String,
    dest_path: String,
    manifest_json: String,
    signcert_path: String,
    pkey_path: String,
) -> PyResult<String> {
    let mut manifest = Manifest::from_json(&manifest_json).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    let signer = create_signer::from_files(signcert_path, pkey_path, SigningAlg::Es256, None)
        .or_else(|error| {
            let py_err = PyException::new_err(error.to_string());
            Err(py_err)
        })?;
    manifest
        .embed(&source_path, &dest_path, &*signer)
        .or_else(|error| {
            let py_err = PyException::new_err(error.to_string());
            Err(py_err)
        })?;
    let manifest_json_out = serde_json::to_string_pretty(&manifest).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    Ok(manifest_json_out)
}

#[pyfunction]
fn embed_manifest_bin(
    format: &str,
    asset: &[u8],
    manifest_json: String,
    signcert: &[u8],
    pkey: &[u8],
) -> PyResult<(String, Vec<u8>)> {
    let mut manifest = Manifest::from_json(&manifest_json).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    let signer =
        create_signer::from_keys(signcert, pkey, SigningAlg::Es256, None).or_else(|error| {
            let py_err = PyException::new_err(error.to_string());
            Err(py_err)
        })?;
    let embed_result = manifest
        .embed_from_memory(format, asset, &*signer)
        .or_else(|error| {
            let py_err = PyException::new_err(error.to_string());
            Err(py_err)
        })?;
    let manifest_json_out = serde_json::to_string_pretty(&manifest).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    Ok((manifest_json_out, embed_result))
}

#[pyfunction]
fn extract_manifest(path: String) -> PyResult<String> {
    let manifest_store = ManifestStore::from_file(&path).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    let manifest = match manifest_store.get_active() {
        Some(v) => Ok(v),
        None => {
            let py_err = PyException::new_err("Active manifest not found");
            Err(py_err)
        }
    }?;
    let manifest_json = serde_json::to_string_pretty(&manifest).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    Ok(manifest_json)
}

#[pyfunction]
fn extract_manifest_bin(format: &str, bytes: &[u8]) -> PyResult<String> {
    let manifest_store = ManifestStore::from_bytes(format, bytes, false).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    let manifest = match manifest_store.get_active() {
        Some(v) => Ok(v),
        None => {
            let py_err = PyException::new_err("Active manifest not found");
            Err(py_err)
        }
    }?;
    let manifest_json = serde_json::to_string_pretty(&manifest).or_else(|error| {
        let py_err = PyException::new_err(error.to_string());
        Err(py_err)
    })?;
    Ok(manifest_json)
}

#[pymodule]
fn pyo3_example(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(embed_manifest, m)?)?;
    m.add_function(wrap_pyfunction!(embed_manifest_bin, m)?)?;
    m.add_function(wrap_pyfunction!(extract_manifest, m)?)?;
    m.add_function(wrap_pyfunction!(extract_manifest_bin, m)?)?;
    Ok(())
}

#[cfg(test)]
mod test_embed_manifest {
    use super::*;
    use std::fs;

    #[test]
    fn test_success() {
        // setup
        let source_path = String::from("tests/fixtures/image.jpg");
        let dest_path = String::from("tests/tmp/signed_image.jpg");
        let manifest_path = String::from("tests/fixtures/test.json");
        let signcert_path = String::from("tests/fixtures/es256_certs.pem");
        let pkey_path = String::from("tests/fixtures/es256_private.key");
        let manifest_json = fs::read_to_string(manifest_path).unwrap();
        fs::remove_file(&dest_path).ok();

        // invoke
        let manifest_json_out = embed_manifest(
            source_path,
            dest_path.clone(),
            manifest_json,
            signcert_path,
            pkey_path,
        )
        .unwrap();

        // assert
        let manifest = Manifest::from_json(&manifest_json_out).unwrap();
        let assertions = manifest.assertions();

        assert_eq!(assertions.len(), 3);
        assert_eq!(assertions[0].label(), "stds.schema-org.CreativeWork");
        assert_eq!(assertions[1].label(), "c2pa.actions");
        assert_eq!(assertions[2].label(), "my.assertion");

        // teardown
        fs::remove_file(&dest_path).unwrap();
    }

    #[test]
    fn test_bad_manifest() {
        // setup
        let source_path = String::from("tests/fixtures/image.jpg");
        let dest_path = String::from("tests/tmp/signed_image.jpg");
        let signcert_path = String::from("tests/fixtures/es256_certs.pem");
        let pkey_path = String::from("tests/fixtures/es256_private.key");
        let manifest_json = String::from("null");
        fs::remove_file(&dest_path).ok();

        // invoke
        let py_err = embed_manifest(
            source_path,
            dest_path.clone(),
            manifest_json,
            signcert_path,
            pkey_path,
        )
        .unwrap_err();

        // assert
        assert_eq!(
            py_err.to_string(),
            "Exception: invalid type: null, expected struct Manifest at line 1 column 4"
        );
    }

    #[test]
    fn test_non_exist_source() {
        // setup
        let source_path = String::from("tests/fixtures/non-exist.jpg");
        let dest_path = String::from("tests/tmp/signed_image.jpg");
        let manifest_path = String::from("tests/fixtures/test.json");
        let signcert_path = String::from("tests/fixtures/es256_certs.pem");
        let pkey_path = String::from("tests/fixtures/es256_private.key");
        let manifest_json = fs::read_to_string(manifest_path).unwrap();
        fs::remove_file(&dest_path).ok();

        // invoke
        let py_err = embed_manifest(
            source_path,
            dest_path.clone(),
            manifest_json,
            signcert_path,
            pkey_path,
        )
        .unwrap_err();

        // assert
        assert_eq!(
            py_err.to_string(),
            "Exception: file not found: tests/fixtures/non-exist.jpg"
        );
    }

    #[test]
    fn test_non_exist_cert() {
        // setup
        let source_path = String::from("tests/fixtures/image.jpg");
        let dest_path = String::from("tests/tmp/signed_image.jpg");
        let manifest_path = String::from("tests/fixtures/test.json");
        let signcert_path = String::from("tests/fixtures/non-exist.pem");
        let pkey_path = String::from("tests/fixtures/es256_private.key");
        let manifest_json = fs::read_to_string(manifest_path).unwrap();
        fs::remove_file(&dest_path).ok();

        // invoke
        let py_err = embed_manifest(
            source_path,
            dest_path.clone(),
            manifest_json,
            signcert_path,
            pkey_path,
        )
        .unwrap_err();

        // assert
        assert_eq!(
            py_err.to_string(),
            "Exception: No such file or directory (os error 2)"
        );
    }
}

#[cfg(test)]
mod test_embed_manifest_bin {
    use super::*;
    use std::fs;

    #[test]
    fn test_success() {
        // setup
        let format = "image/jpeg";
        let asset = fs::read("tests/fixtures/image.jpg").unwrap();
        let manifest_json = fs::read_to_string("tests/fixtures/test.json").unwrap();
        let signcert = fs::read("tests/fixtures/es256_certs.pem").unwrap();
        let pkey = fs::read("tests/fixtures/es256_private.key").unwrap();

        // invoke
        let (manifest_json_out, _) =
            embed_manifest_bin(format, &asset, manifest_json, &signcert, &pkey).unwrap();

        // assert
        let manifest = Manifest::from_json(&manifest_json_out).unwrap();
        let assertions = manifest.assertions();

        assert_eq!(assertions.len(), 3);
        assert_eq!(assertions[0].label(), "stds.schema-org.CreativeWork");
        assert_eq!(assertions[1].label(), "c2pa.actions");
        assert_eq!(assertions[2].label(), "my.assertion");
    }
}

#[cfg(test)]
mod test_extract_manifest {
    use super::*;

    #[test]
    fn test_success() {
        // setup
        let path = String::from("tests/fixtures/C.jpg");

        // invoke
        let manifest_json = extract_manifest(path).unwrap();

        // assert
        let manifest = Manifest::from_json(&manifest_json).unwrap();
        assert_eq!(manifest.title(), Some("C.jpg"));
        assert_eq!(manifest.format(), "image/jpeg");
    }

    #[test]
    fn test_no_manifest() {
        // setup
        let path = String::from("tests/fixtures/image.jpg");

        // invoke
        let py_err = extract_manifest(path).unwrap_err();

        // assert
        assert_eq!(
            py_err.to_string(),
            String::from("Exception: no JUMBF data found")
        );
    }

    #[test]
    fn test_non_exist_file() {
        // setup
        let path = String::from("tests/fixtures/non-exist.jpg");

        // invoke
        let py_err = extract_manifest(path).unwrap_err();

        // assert
        assert_eq!(
            py_err.to_string(),
            String::from("Exception: No such file or directory (os error 2)")
        );
    }
}

#[cfg(test)]
mod test_extract_manifest_bin {
    use super::*;
    use std::fs;

    #[test]
    fn test_success() {
        // setup
        let bytes = fs::read("tests/fixtures/C.jpg").unwrap();
        let format = "image/jpeg";

        // invoke
        let manifest_json = extract_manifest_bin(format, &bytes).unwrap();

        // assert
        let manifest = Manifest::from_json(&manifest_json).unwrap();
        assert_eq!(manifest.title(), Some("C.jpg"));
        assert_eq!(manifest.format(), "image/jpeg");
    }
}
