#!/bin/bash

./bin/estree-to-js.js es6 --generate-json-spec --out generated/es6.json
./bin/estree-to-js.js es6 --generate-visitor --json-spec generated/es6.json --out generated/es6-visitor.js

./bin/estree-to-js.js es7 --generate-json-spec --out generated/es7.json
./bin/estree-to-js.js es7 --generate-visitor --json-spec generated/es7.json --out generated/es7-visitor.js

./bin/estree-to-js.js es7Jsx --generate-json-spec --out generated/es7-jsx.json
./bin/estree-to-js.js es7Jsx --generate-visitor --json-spec generated/es7-jsx.json --out generated/es7-jsx-visitor.js

./bin/estree-to-js.js es10 --generate-json-spec --out generated/es10.json
./bin/estree-to-js.js es10 --generate-visitor --json-spec generated/es10.json --out generated/es10-visitor.js --format esm
