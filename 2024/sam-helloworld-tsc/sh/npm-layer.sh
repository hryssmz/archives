#!/bin/sh
LAYER_ROOT="layers/npm"

cp "layers/package.json" "${LAYER_ROOT}/"
(
    cd "${LAYER_ROOT}"
    npm install --omit=dev
    rm package.json
    rm package-lock.json
)
