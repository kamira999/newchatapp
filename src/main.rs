use rustls::{
    ServerConfig, ServerConnection, Stream, StreamOwned, pki_types::{
        CertificateDer, PrivateKeyDer, pem::PemObject
    }
};

use rcgen::{generate_simple_self_signed, CertifiedKey};
use std::{io::{BufRead, Read}, net::TcpListener, sync::Arc};
use std::net::TcpStream;

fn main() -> anyhow::Result<()> {



    let subject_alt_names = vec!["localhost".to_string()];
    let port = 8088;

    let CertifiedKey { cert, signing_key } = generate_simple_self_signed(subject_alt_names)?;

    println!("{}", cert.pem());
    println!("{}", signing_key.serialize_pem());

    let cert = CertificateDer::from_pem_slice(cert.pem().as_bytes())?;
    let key = PrivateKeyDer::from_pem_slice(signing_key.serialize_pem().as_bytes())?;
    println!("{:?}", cert);
    println!("{:?}", key);

    let config = ServerConfig::builder()
        .with_no_client_auth()
        .with_single_cert(vec![cert], key)?;



    // WORKS
    let listener = TcpListener::bind("localhost:4443")?;
    // let (socket, _) = listener.accept()?;



    // DOESNT WORK - OS ERROR 111
    // let socket = TcpStream::connect(format!("localhost:{}", port))?;
    // let socket = TcpStream::connect("localhost:8080")?;

    // let mut tls_stream = StreamOwned::new(conn, socket);

    loop{
        let conn = ServerConnection::new(Arc::new(config.clone()))?;
        let (socket, _addr) = listener.accept()?;
        let mut tls_stream = rustls::StreamOwned::new(conn, socket);

        let mut buf: Vec<u8>= Vec::new();
        let _len = match tls_stream.read_to_end(&mut buf) {
            Ok(n) => n,
            Err(e) => {
                eprintln!("{e}");
                continue;
            }
        };

        if !buf.is_empty() {

            println!("Received message: {}\n", String::from_utf8(buf)?);
            
        }
    }

    Ok(())
}
