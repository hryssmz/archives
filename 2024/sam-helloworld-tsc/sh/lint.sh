#!/bin/sh
npx tsc -p functions/tsconfig.json --noEmit \
    && npx tsc -p libs/tsconfig.json --noEmit \
    && npx eslint --max-warnings=0 .
