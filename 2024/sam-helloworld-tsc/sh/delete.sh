#!/bin/sh
LOCALSTACK_HOSTNAME=localstack samlocal delete \
    --config-env samlocal \
    --no-prompts
