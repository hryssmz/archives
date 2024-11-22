#!/bin/sh
PACKAGE="hwl"
LAYER_ROOT="layers/hello-world"
mkdir -p "${LAYER_ROOT}/node_modules"

build_layer() {
    (
        cd "$1"
        rm -rf dist
        npx tsc
    ) && (
        rm -rf "node_modules/$1"
        cp -r "$1/dist" "node_modules/$1"
        cp -r "$1/dist" "${LAYER_ROOT}/node_modules/$1"
    )
}

build_layer hwl
