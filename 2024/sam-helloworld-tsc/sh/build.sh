#!/bin/sh
tscompile() {
    (
        cd "functions/$1"
        rm -rf dist
        npx tsc
        cp package.json dist/
    )
}

# tscompile hello-axios
tscompile hello-layer
# tscompile hello-world

samlocal build
