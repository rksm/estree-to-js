#!/bin/bash

./bin/estree-to-js.js es6 --generate-json-spec --out generated/es6.json
./bin/estree-to-js.js es6 --generate-visitor --json-spec generated/es6.json --out generated/es6-visitor.js

./bin/estree-to-js.js es7 --generate-json-spec --out generated/es7.json
./bin/estree-to-js.js es7 --generate-visitor --json-spec generated/es7.json --out generated/es7-visitor.js

./bin/estree-to-js.js es7Jsx --generate-json-spec --out generated/es7-jsx.json
./bin/estree-to-js.js es7Jsx --generate-visitor --json-spec generated/es7-jsx.json --out generated/es7-jsx-visitor.js

for v in es2015 es2016 es2017 es2018; do
  ./bin/estree-to-js.js ${v} --generate-json-spec --out generated/${v}.json
  ./bin/estree-to-js.js ${v} --generate-visitor --json-spec generated/${v}.json --out generated/${v}-visitor.js
done
