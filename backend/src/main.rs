use actix_cors::Cors;
use actix_web::{middleware, web, App, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header()
                    .max_age(3600)
            )
            .wrap(middleware::Logger::default())
            .service(web::resource("/").to(|| async { "Welcome to rustyroad!" }))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
