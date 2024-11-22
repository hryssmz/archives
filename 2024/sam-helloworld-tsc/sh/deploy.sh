#!/bin/sh
ENDPOINT="http://localstack:4566"
LOCALSTACK_URL="http://localstack:4566"

LOCALSTACK_HOSTNAME="localstack" samlocal deploy \
    --config-env samlocal \
    --parameter-overrides \
        "ParameterKey=Endpoint,ParameterValue=${ENDPOINT}" \
        "ParameterKey=ApigwEndpoint,ParameterValue=${LOCALSTACK_URL}"
