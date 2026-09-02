use rustls::{ServerConfig, pki_types::{CertificateDer, PrivateKeyDer, pem::PemObject}};

fn main() -> anyhow::Result<()> {

    let cert_file = "./.certs/cert.pem";
    let private_key_file = "./.certs/private.pem";

    //TODO: FIX "Error: no items found" ON CERT AND KEY
    // MAYBE GEN NEW KEYS?? DIFF ENCODING? DER? SOMETHING SOMETHING IDK
    let certs: Vec<_> = CertificateDer::pem_file_iter(".certs/certificate.pem")?
        .map(|cert| cert.unwrap())
        .collect();


    let key = PrivateKeyDer::from_pem_file(".certs/myPrivateKey.key")?;


    Ok(())
}
