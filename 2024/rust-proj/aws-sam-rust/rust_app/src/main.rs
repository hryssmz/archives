use lambda_runtime::Error as LambdaError;

#[tokio::main]
async fn main() -> Result<(), LambdaError> {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::INFO)
        .with_target(false)
        .init();

    lambda_runtime::run(lambda_runtime::service_fn(rust_app::function_handler)).await
}
