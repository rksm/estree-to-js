#!/usr/bin/env node

/*
  Usage
  keyword:
  ./bin/generate-estree-json.js es6
  specifying urls
  ./bin/generate-estree-json.js \
      https://raw.githubusercontent.com/estree/estree/master/spec.md \
      https://raw.githubusercontent.com/estree/estree/master/es6.md
*/

var path = require("path"),
    fs = require("fs"),
    lang = require("lively.lang"),
    args = process.argv.slice(2);

if (args.indexOf("--help") > -1 || args.indexOf("-h") > -1) {
  printUsage();
  process.exit(0);
}

var parsedArgs = parseArgs(args);

(function main() {
  jsonSpec()
    .then(spec => {
      if (parsedArgs.generateJson) {
        console.log("Generating estree JSON");
        return JSON.stringify(spec, null, 2);
      }
      if (parsedArgs.generateVisitor) {
        console.log("Generating estree visitor source");
        var exceptions = [], name = "Visitor",
            source = require("../index").createVisitor(spec, exceptions, name);
        return source;
      }
    })
    .then(result => {
      if (parsedArgs.out) {
        return write(parsedArgs.out, result).then(() => {
          console.log("written to " + parsedArgs.out);
        });
      } else console.log(result);
    })
    .catch(err => { console.error(err.stack); process.exit(1); });
})();


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// helpers

function jsonSpec() {
  return parsedArgs.specFile ?
    read(parsedArgs.specFile).then(JSON.parse) :
    require("../index").fetch(parsedArgs.urls)
      .then(mdSource => require("../index").parse(mdSource))
}

function write(path, content) {
  return new Promise((resolve, reject) => {
    require("fs").writeFile(path, content, (err) => err ? reject(err) : resolve());
  })
}

function read(path) {
  return new Promise((resolve, reject) => {
    require("fs").readFile(path, (err, content) => err ? reject(err) : resolve(String(content)));
  })
}

function parseArgs(args) {
  var out, outI = args.indexOf("--out");
  if (outI > -1) {
    out = args[outI+1];
    args = lang.arr.withoutAll(args, ["--out", out]);
    if (!path.isAbsolute(out)) out = path.join(process.cwd(), out);
  }

  var specFile, specFileI = args.indexOf("--json-spec");
  if (specFileI > -1) {
    specFile = args[specFileI+1];
    args = lang.arr.withoutAll(args, ["--json-spec", specFile]);
    if (!path.isAbsolute(specFile)) specFile = path.join(process.cwd(), specFile);
  }

  var generateVisitor = args.indexOf("--generate-visitor") > -1 || false,
      generateJson = generateVisitor ? false : (args.indexOf("--generate-json-spec") > -1 || true);
  args = lang.arr.withoutAll(args, ["--generate-visitor", "--generate-json-spec"]);

  if (!args.length) args = ["es6"];

  return {
    out: out,
    urls: args,
    specFile: specFile,
    generateJson: generateJson,
    generateVisitor: generateVisitor
  };
}

function printUsage() {
  var usage = `usage:
${args[0]} [--out file] [md-source-url-or-keyword-1 md-source-url-or-keyword-2 ...]

-h\t--help\t\t\tthis text
  \t--out\t\t\tfile output file to write
  \t--generate-json-spec\tfetch and parse markdown source and generate JSON spec from it (default)
  \t--generate-visitor\tgenerate source code for AST visitor class
  \t--json-spec\t\tfile to json spec. If specified it is used instead of fetching + parsing

Examples:
  ./bin/generate-estree-json.js es6
  (currently es5 and es6)
or by specifying all urls of markdown to be parsed
./bin/generate-estree-json.js \\
    https://raw.githubusercontent.com/estree/estree/master/spec.md \\
    https://raw.githubusercontent.com/estree/estree/master/es6.md`

  console.log(usage);
}
