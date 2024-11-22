use std::fs;
use std::path::Path;

use c2pa::{Manifest, SigningAlg};

mod test_embed_manifest {
    use super::super::embed_manifest;
    use super::*;

    #[test]
    fn test_success() {
        // setup
        let source_path = Path::new("tests/fixtures/image.jpg");
        let dest_path = Path::new("tests/tmp/signed_image.jpg");
        let signcert_path = Path::new("tests/fixtures/es256_certs.pem");
        let pkey_path = Path::new("tests/fixtures/es256_private.key");
        let alg = SigningAlg::Es256;
        let tsa_url: Option<String> = None;
        let manifest_path = Path::new("tests/fixtures/test.json");
        let manifest_json = fs::read_to_string(manifest_path).unwrap();
        fs::remove_file(&dest_path).ok();

        // invoke
        let manifest_json_out = embed_manifest(
            source_path,
            dest_path,
            manifest_json,
            signcert_path,
            pkey_path,
            alg,
            tsa_url,
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
}

mod test_extract_manifest {
    use super::super::extract_manifest;
    use super::*;

    #[test]
    fn test_success() {
        // setup
        let path = Path::new("tests/fixtures/C.jpg");

        // invoke
        let extracted_manifest = extract_manifest(path).unwrap();

        // assert
        let manifest: Manifest = serde_json::from_str(&extracted_manifest).unwrap();
        assert_eq!(manifest.title(), Some("C.jpg"));
        assert_eq!(manifest.format(), "image/jpeg");
    }

    #[test]
    fn test_no_manifest() {
        // setup
        let path = Path::new("tests/fixtures/image.jpg");

        // invoke
        if let Err(e) = extract_manifest(path) {
            assert_eq!(e.to_string(), "no JUMBF data found");
        } else {
            panic!("Test failed");
        }
    }

    #[test]
    fn test_file_not_found() {
        // setup
        let path = Path::new("tests/fixtures/not_found.jpg");

        // invoke
        if let Err(e) = extract_manifest(path) {
            assert_eq!(e.to_string(), "No such file or directory (os error 2)");
        } else {
            panic!("Test failed");
        }
    }
}
