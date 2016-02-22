var lang = require("lively.lang");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// fetching es6 markdown specs

var mdAlias = {
  es5: ["https://raw.githubusercontent.com/estree/estree/master/spec.md"],
  es6: ["https://raw.githubusercontent.com/estree/estree/master/spec.md",
        "https://raw.githubusercontent.com/estree/estree/master/es6.md"]
}

function fetch(urlStrings) {
  if (!Array.isArray(urlStrings)) urlStrings = [urlStrings];
  var urls = [].concat.apply([], urlStrings.map(arg => mdAlias[arg] || [arg]));
  return Promise.all(urls.map(urlString => {
    console.log("Fetching %s", urlString);
    return new Promise((resolve, reject) => {
      var url = require("url").parse(urlString);
      require(url.protocol === "https:" ? "https" : "http").get(url, (res) => {
        var success = res.statusCode < 300;
        res.resume();
        var data = "";
        res.on("data", (d) => data += d);
        res.on("end", () => success ? resolve(data) : reject(data))
      }).on('error', reject);
    });
  })).then(contents => contents.join("\n"));
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// estree spec markdown parser
function extractTypeSourcesFromMarkdown(mdSource) {
  var types = lang.string.lines(mdSource).reduce((typesAkk, line) => {
    if (typesAkk.current && (line.indexOf("```") > -1 || !line.trim().length)) {
      typesAkk.types.push(typesAkk.current); typesAkk.current = null;
    } else if (!typesAkk.current && line.indexOf("```js") > -1) {
      typesAkk.current = [];
    } else if (typesAkk.current) typesAkk.current.push(line);
    return typesAkk;
  }, {current: null, types: []}).types;
  return lang.arr.invoke(types, "join", "\n");
}

function parseInterfaceOrEnumOrExtend(source) {
  if (source.indexOf("interface") === 0) return parseInterface(source);
  if (source.indexOf("enum") === 0) return parseEnum(source);
  if (source.indexOf("extend") === 0) return parseExtend(source);
  throw new Error("Cannot process type source\n" + source);
}

function parseInterface(source) {
  var lines = lang.string.lines(source);
  var start = lines.shift();
  var spec = {type: "interface", name: null, parents: [], properties: []};
  var m = start.match(/interface\s+([^\s]+)(?:\s+<:\s+([^\{]+))?/)
  if (m) {
    spec.name = m[1].trim();
    if (m[2]) spec.parents = m[2].split(",").map(p => p.trim());
  }
  
  if (start.trim().slice(-1) === "{") lines.unshift("{");
  
  var i = 0;
  do {
    if (i++ > 1000) throw new Error("Endless loop in parseInterface");
    var remainingLinesAndProps = parseKeysAndValues(lines);
    spec.properties = spec.properties.concat(remainingLinesAndProps.properties);
    lines = remainingLinesAndProps.lines;
  } while (lines.length);
  
  return spec;
}

function parseKeysAndValues(lines) {
  var line, props = [];
  while (line = lines.shift()) {
    if (line.match(/^\s*\{\s*$/)) continue;
    if (line.match(/^\s*\};?\s*$/)) break;
    var propMatch = line.match(/\s*([^:]+):([^;]+)/);
    if (!propMatch) throw new Error("Cannot parse property line " + line);
    var name = propMatch[1], rest = propMatch[2].trim();
    if (name === "type") continue; // ???
    if (rest.indexOf("{") > -1) {
      var inner = parseKeysAndValues([].concat(lines));
      lines = inner.lines
      props.push({name: name, isComplex: true, value: inner.properties});
    } else {
      props.push(parsePropertyValue(name, rest));
    }
  }
  return {lines: lines, properties: props};
}

function parseEnum(code) {
  return lang.string.lines(code).reduce((spec, line, i) => {
    if (i === 0) {
      var m = line.match(/enum([^\{]+)/)
      if (m) spec.name = m[1].trim();
    }
    else if (line.trim() === "}") {/*end*/}
    else spec.types = line.split("|").map(ea => ea.trim().replace(/"/g, ""));
    return spec;
  }, {type: "enum", name: null, types: []});
}

function parseExtend(code) {
  return lang.string.lines(code).reduce((spec, line, i) => {
    if (i === 0) {
      // var line = "extend interface Program {"
      var m = line.match(/extend\s+([^\s]+)\s+([^\{]+)/);
      if (m) {
        spec.extendedType = m[1];
        spec.name = m[2].trim();
      }
    }
    else if (line.trim() === "}") {/*end*/}
    else {
      // var line = '    sourceType: "script" | "module";'
      var propMatch = line.match(/\s*([^:]+):([^;]+)/);
      if (propMatch) {
        var name = propMatch[1];
        spec.properties.push(lang.obj.merge({extensionFrom: spec.name}, parsePropertyValue(name, propMatch[2])));
      }
    }
    return spec;
  }, {type: "extend", extendedType: null, name: null, properties: []});
}

function parsePropertyValue(name, string) {
  // var string = ' "script" | "module";'
  // var string = ' [ Statement | ModuleDeclaration ];'
  string = string.replace(/^\s+|[;\s]+$/g, "");
  var isList = false, isOptional = false;
  var listMatch = string.match(/^\[([^\]]+)\]$/);
  if (listMatch) {
    isList = true;
    string = listMatch[1];
  }
  var types = string.split("|").map(ea => ea.trim());
  if (types.indexOf("null") > -1) {
    isOptional = true,
    types = lang.arr.without(types, "null");
  }
  return {isList: isList, isOptional: isOptional, name: name, types: types};
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function findTypeForExtend(types, extend) {
  var orig = lang.arr.detect(types, ea => ea.name === extend.name && ea.type !== "extend");
  if (!orig) throw new Error("Cannot find original for extension " + JSON.stringify(extend, null, 2));
  return orig;
}

function mergeExtend(type, extension) {
  console.assert(type.name === extension.name, `${type.name} != ${extension.name}`);
  var props = extension.properties.reduce((props, extensionProp) => {
    var existing = lang.arr.detect(props, prop => prop.name === extensionProp.name);
    var index = props.indexOf(existing);
    if (index > -1) props.splice(index, 1, extensionProp);
    else props.push(extensionProp);
    return props;
  }, type.properties.slice());
  return lang.obj.merge(type, {properties: props});
}

function mergeProperties(base, extension) {
  var props = extension.properties.reduce((props, extensionProp) => {
    var existing = lang.arr.detect(props, prop => prop.name === extensionProp.name);
    var index = props.indexOf(existing);
    if (index > -1) {
      var merged = lang.obj.clone(existing);
      merged.types = lang.arr.uniq(existing.types.concat(extensionProp.types));
      if (merged.types.length === 2 && merged.types.indexOf("boolean") > -1) {
        if (merged.types.indexOf("true") > -1) merged.types = ["true"];
        else if (merged.types.indexOf("false") > -1) merged.types = ["false"];
      }
      props.splice(index, 1, merged);
    } else props.push(extensionProp);
    return props;
  }, base.properties.slice());
  var additions = {properties: props};
  if (base.parents) additions.parents = lang.arr.uniq(base.parents.concat(extension.parents || []));
  return lang.obj.merge(base, additions);
}

function mergeExtensions(types, extensions) {
  return extensions.reduce((types, extension) => {
    var orig = findTypeForExtend(types, extension);
    types.splice(types.indexOf(orig), 1, mergeExtend(orig, extension));
    return types;
  }, types);
}

function sortInterfacesByInheritance(parsedInterfaces) {
  var deps = parsedInterfaces.reduce((deps, ea) => {
    deps[ea.name] = ea.parents;
    return deps;
  }, {});
  var sorted = [], remaining = Object.keys(deps), i = 0;
  do {
    i++; if (i > 1000) throw new Error("Endless loop in sortInterfacesByInheritance");
    var resolved = remaining.filter(ea => !deps[ea].length);
    remaining = lang.arr.withoutAll(remaining, resolved);
    remaining.forEach(ea => deps[ea] = lang.arr.withoutAll(deps[ea], resolved));
    sorted = sorted.concat(resolved);
  } while (remaining.length);
  return sorted.map(name => lang.arr.detect(parsedInterfaces, ea => ea.name === name));
}

function canonicalizeInterfaces(parsedInterfaces) {
  return parsedInterfaces.reduce((spec, ea) => {
    var parents = ea.parents.map(p => spec[p]);
    var mergedWithParent = parents.reduce(
      (mergedWithParent, parent) => mergeProperties(mergedWithParent, parent), ea);
    spec[mergedWithParent.name] = mergedWithParent;
    return spec;
  }, {});
}

function parse(mdSource) {
  var parsed = extractTypeSourcesFromMarkdown(mdSource).map(parseInterfaceOrEnumOrExtend),
      groups = lang.arr.groupByKey(parsed, "type"),
      parsedInterfaces = mergeExtensions(groups["interface"], groups.extend),
      sortedInterfaces = sortInterfacesByInheritance(parsedInterfaces),
      nodeTypes = canonicalizeInterfaces(sortedInterfaces);
  return lang.obj.merge(
    groups.enum.reduce((enums, ea) => (enums[ea.name] = ea) && enums, {}),
    nodeTypes);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// visitor logic

function createVisitorFunctionCode(exceptions, nodeTypes, typeNames, nodeType, indent) {
  // var nodeType = nodeTypes.FunctionExpression
  // lang.chain(nodeTypes).values().pluck("properties").invoke("pluck", "types").flatten().uniq().value().sort().join(",");
  // var exceptionNames = exceptions.map(ea => ea.name).concat(['"const"','"constructor"','"get"','"init"','"let"','"method"','"module"','"script"','"set"','"var"', 'boolean','false','number','string']),
  var code = `visit${nodeType.name} = function visit${nodeType.name}(node, state, path) {\n`;
  indent += "  ";
  code += `${indent}var visitor = this;\n`
  return nodeType.properties.reduce((code, p) => {
    if (!p.types) return code;
    // var subtypes = lang.arr.withoutAll(p.types, exceptionNames);
    var subtypes = lang.arr.intersect(p.types, typeNames);
    if (!subtypes.length) return code;
    code += `${indent}// ${p.name} ${p.isList ? "is a list with types" : "is of types"} ${p.types.join(", ")}\n`;
    if (p.isOptional) {
      code += `${indent}if (node["${p.name}"]) {\n`;
      indent += "  ";
    }
    if (p.isList) {
      code += `${indent}node["${p.name}"] = node["${p.name}"].reduce(function(results, ea, i) {\n`
      code += `${indent}  var result = visitor.accept(ea, state, path.concat(["${p.name}", i]));\n`
      code += `${indent}  if (Array.isArray(result)) results.push.apply(results, result);\n`
      code += `${indent}  else results.push(result);\n`
      code += `${indent}  return results;\n`
      code += `${indent}}, []);`
    } else {
      code += `${indent}node["${p.name}"] = visitor.accept(node["${p.name}"], state, path.concat(["${p.name}"]));\n`
    }
    if (p.isOptional) {
      indent = indent.slice(0,-2);
      code += `${indent}}\n`;
    }
    return code;
  }, code) + `${indent}return node;\n}\n`;
}

function createVisitor(nodeTypes, exceptions, name) {
  var code = `// <<<<<<<<<<<<< BEGIN OF AUTO GENERATED CODE <<<<<<<<<<<<<\n`;
  code += `// Generated on ${lang.date.format('yy-mm-dd HH:MM Z')}\n`
  code += `function ${name}() {}\n`;
  exceptions = exceptions.concat(lang.obj.values(nodeTypes).filter(ea => ea.type === "enum"));
  var types = lang.arr.withoutAll(lang.obj.values(nodeTypes), exceptions);
  var typeNames = types.map(ea => ea.name);
  var indent = "  ";
  code += `${name}.prototype.accept = function accept(node, state, path) {\n`
  code += `${indent}if (!node) throw new Error("Undefined AST node in ${name}.accept:\\n  " + path.join(".") + "\\n  " + node);\n`;
  code += `${indent}if (!node.type) throw new Error("Strangee AST node without type in ${name}.accept:\\n  " + path.join(".") + "\\n  " + JSON.stringify(node));\n`;
  code += `${indent}switch(node.type) {\n`
  indent += "  ";
  code +=  typeNames.map(typeName => `${indent}case "${typeName}": return this.visit${typeName}(node, state, path);`).join("\n");
  indent = indent.slice(0, -2);
  code += `\n${indent}}\n`
  code += `${indent}throw new Error("No visit function in AST visitor ${name} for:\\n  " + path.join(".") + "\\n  " + JSON.stringify(node));\n`
  indent = indent.slice(0, -2);
  code += `${indent}}\n`
  code += lang.obj.values(types)
    .filter(type => exceptions.indexOf(type) === -1)
    .map(ea => `${indent}${name}.prototype.${createVisitorFunctionCode(exceptions, types, typeNames, ea, indent)}`)
    .join("") + "\n";
  code += `// >>>>>>>>>>>>> END OF AUTO GENERATED CODE >>>>>>>>>>>>>\n`;
  return code;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

exports.fetch = fetch;
exports.createVisitor = createVisitor;
exports.parse = parse;
