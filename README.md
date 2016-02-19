# estree-to-js

Parser / JSON + visitor generator of the markdown [estree spec](https://github.com/estree/estree);

# Usage

## command line

    --out			file output file to write
    --generate-json-spec	fetch and parse markdown source and generate JSON spec from it (default)
    --generate-visitor	generate source code for AST visitor class
    --json-spec		file to json spec. If specified it is used instead of fetching + parsing

### Examples:

- `./bin/estree-to-js.js es6` prints JSON spec of es6 estree
- `./bin/estree-to-js.js es6 --generate-visitor` prints JS source es6 estree visitor class

# License

MIT