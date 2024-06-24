FROM rust:latest

WORKDIR /usr/src/app

# Install dependencies
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    cargo install diesel_cli --no-default-features --features postgres && \
    cargo install cargo-watch

COPY . .

# Build the application
RUN cargo build --release

# Run the application with live reloading
CMD ["cargo", "watch", "-x", "run"]
