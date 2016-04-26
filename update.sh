#!/bin/bash

./bin/estree-to-js.js es6 --generate-json-spec --out generated/es6.json
./bin/estree-to-js.js es6 --generate-visitor --json-spec generated/es6.json --out generated/es6-visitor.js
