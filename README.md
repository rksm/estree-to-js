# estree-to-js

Parser / JSON + visitor generator of the markdown [estree spec](https://github.com/estree/estree);

# Usage

## npdejs API

### estree-to-js interface:

```js
var estree = require("estree-to-js");
var visitorSource = estree.fetch("es6")
  .then(estree.parse)
  .then(spec => estree.createVisitor(spec, []/*exceptions*/, "MyVisitor"))
  .catch(console.error)
```

### Visitors

Creation of visitor:

```js
var visitor;
visitorSource
  .then(source => eval(source + "\n" + "MyVisitor"))
  .then(MyVisitor => visitor = new MyVisitor());
```

#### Print path example

visitors have an `accept(node, state, path)` method and visitNodeType methods
like `visitVariableDeclaration(node, state, path)`. You can customize it to
your needs, for example:

```js
var lang = require("lively.lang"), ast = require("lively.ast");
visitor.accept = lang.fun.wrap(visitor.accept, (proceed, node, state, path) => {
  state.push(path.join(".") + " - " + node.type);
  proceed(node, state, path);
});
var state = [];
visitor.accept(ast.parse("var x = 1+3"), state, []);
console.log(state.join("\n")); // =>
                               //   - Program
                               //   body.0 - VariableDeclaration
                               //   body.0.declarations.0 - VariableDeclarator
                               //   ...
```

#### Rewriting example

```js
var replacer = (node) => lang.obj.merge(node, {id: {type: "Identifier", name: "foo_" + node.id.name}})
var visitor = new MyVisitor();
visitor.accept = lang.fun.wrap(visitor.accept, (proceed, node, state, path) => {
  if (node.type === "VariableDeclarator") node = replacer(node);
  return proceed(node, state, path);
});
var rewritten = visitor.accept(ast.parse("var x = 1 + 3"), null, []);
ast.stringify(rewritten); // => var foo_x = 1 + 3;
```

## command line

    --out			file output file to write
    --generate-json-spec	fetch and parse markdown source and generate JSON spec from it (default)
    --generate-visitor	generate source code for AST visitor class
    --json-spec		file to json spec. If specified it is used instead of fetching + parsing

### Examples:

- `./bin/estree-to-js.js es6` prints JSON spec of es6 estree
- `./bin/estree-to-js.js es6 --generate-visitor` prints JS source es6 estree visitor class

# License

[MIT](LICENSE)
