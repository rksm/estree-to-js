// <<<<<<<<<<<<< BEGIN OF AUTO GENERATED CODE <<<<<<<<<<<<<
// Generated on 20-02-27 10:47 GMT+0100
class Visitor {
  accept(node, state, path) {
    if (!node) throw new Error("Undefined AST node in Visitor.accept:\n  " + path.join(".") + "\n  " + node);
    if (!node.type) throw new Error("Strangee AST node without type in Visitor.accept:\n  " + path.join(".") + "\n  " + JSON.stringify(node));
    switch(node.type) {
      case "Node": return this.visitNode(node, state, path);
      case "SourceLocation": return this.visitSourceLocation(node, state, path);
      case "Position": return this.visitPosition(node, state, path);
      case "Program": return this.visitProgram(node, state, path);
      case "Function": return this.visitFunction(node, state, path);
      case "Statement": return this.visitStatement(node, state, path);
      case "Directive": return this.visitDirective(node, state, path);
      case "SwitchCase": return this.visitSwitchCase(node, state, path);
      case "CatchClause": return this.visitCatchClause(node, state, path);
      case "VariableDeclarator": return this.visitVariableDeclarator(node, state, path);
      case "Expression": return this.visitExpression(node, state, path);
      case "Property": return this.visitProperty(node, state, path);
      case "Pattern": return this.visitPattern(node, state, path);
      case "Super": return this.visitSuper(node, state, path);
      case "SpreadElement": return this.visitSpreadElement(node, state, path);
      case "TemplateElement": return this.visitTemplateElement(node, state, path);
      case "Class": return this.visitClass(node, state, path);
      case "ClassBody": return this.visitClassBody(node, state, path);
      case "MethodDefinition": return this.visitMethodDefinition(node, state, path);
      case "ModuleDeclaration": return this.visitModuleDeclaration(node, state, path);
      case "ModuleSpecifier": return this.visitModuleSpecifier(node, state, path);
      case "JSXEmptyExpression": return this.visitJSXEmptyExpression(node, state, path);
      case "JSXExpressionContainer": return this.visitJSXExpressionContainer(node, state, path);
      case "JSXSpreadChild": return this.visitJSXSpreadChild(node, state, path);
      case "JSXBoundaryElement": return this.visitJSXBoundaryElement(node, state, path);
      case "JSXAttribute": return this.visitJSXAttribute(node, state, path);
      case "JSXText": return this.visitJSXText(node, state, path);
      case "JSXOpeningFragment": return this.visitJSXOpeningFragment(node, state, path);
      case "JSXClosingFragment": return this.visitJSXClosingFragment(node, state, path);
      case "Identifier": return this.visitIdentifier(node, state, path);
      case "Literal": return this.visitLiteral(node, state, path);
      case "ExpressionStatement": return this.visitExpressionStatement(node, state, path);
      case "BlockStatement": return this.visitBlockStatement(node, state, path);
      case "EmptyStatement": return this.visitEmptyStatement(node, state, path);
      case "DebuggerStatement": return this.visitDebuggerStatement(node, state, path);
      case "WithStatement": return this.visitWithStatement(node, state, path);
      case "ReturnStatement": return this.visitReturnStatement(node, state, path);
      case "LabeledStatement": return this.visitLabeledStatement(node, state, path);
      case "BreakStatement": return this.visitBreakStatement(node, state, path);
      case "ContinueStatement": return this.visitContinueStatement(node, state, path);
      case "IfStatement": return this.visitIfStatement(node, state, path);
      case "SwitchStatement": return this.visitSwitchStatement(node, state, path);
      case "ThrowStatement": return this.visitThrowStatement(node, state, path);
      case "TryStatement": return this.visitTryStatement(node, state, path);
      case "WhileStatement": return this.visitWhileStatement(node, state, path);
      case "DoWhileStatement": return this.visitDoWhileStatement(node, state, path);
      case "ForStatement": return this.visitForStatement(node, state, path);
      case "ForInStatement": return this.visitForInStatement(node, state, path);
      case "Declaration": return this.visitDeclaration(node, state, path);
      case "ThisExpression": return this.visitThisExpression(node, state, path);
      case "ArrayExpression": return this.visitArrayExpression(node, state, path);
      case "ObjectExpression": return this.visitObjectExpression(node, state, path);
      case "FunctionExpression": return this.visitFunctionExpression(node, state, path);
      case "UnaryExpression": return this.visitUnaryExpression(node, state, path);
      case "UpdateExpression": return this.visitUpdateExpression(node, state, path);
      case "BinaryExpression": return this.visitBinaryExpression(node, state, path);
      case "AssignmentExpression": return this.visitAssignmentExpression(node, state, path);
      case "LogicalExpression": return this.visitLogicalExpression(node, state, path);
      case "MemberExpression": return this.visitMemberExpression(node, state, path);
      case "ConditionalExpression": return this.visitConditionalExpression(node, state, path);
      case "CallExpression": return this.visitCallExpression(node, state, path);
      case "NewExpression": return this.visitNewExpression(node, state, path);
      case "SequenceExpression": return this.visitSequenceExpression(node, state, path);
      case "ArrowFunctionExpression": return this.visitArrowFunctionExpression(node, state, path);
      case "YieldExpression": return this.visitYieldExpression(node, state, path);
      case "TemplateLiteral": return this.visitTemplateLiteral(node, state, path);
      case "TaggedTemplateExpression": return this.visitTaggedTemplateExpression(node, state, path);
      case "AssignmentProperty": return this.visitAssignmentProperty(node, state, path);
      case "ObjectPattern": return this.visitObjectPattern(node, state, path);
      case "ArrayPattern": return this.visitArrayPattern(node, state, path);
      case "RestElement": return this.visitRestElement(node, state, path);
      case "AssignmentPattern": return this.visitAssignmentPattern(node, state, path);
      case "ClassExpression": return this.visitClassExpression(node, state, path);
      case "MetaProperty": return this.visitMetaProperty(node, state, path);
      case "ImportDeclaration": return this.visitImportDeclaration(node, state, path);
      case "ImportSpecifier": return this.visitImportSpecifier(node, state, path);
      case "ImportDefaultSpecifier": return this.visitImportDefaultSpecifier(node, state, path);
      case "ImportNamespaceSpecifier": return this.visitImportNamespaceSpecifier(node, state, path);
      case "ExportNamedDeclaration": return this.visitExportNamedDeclaration(node, state, path);
      case "ExportSpecifier": return this.visitExportSpecifier(node, state, path);
      case "AnonymousDefaultExportedFunctionDeclaration": return this.visitAnonymousDefaultExportedFunctionDeclaration(node, state, path);
      case "AnonymousDefaultExportedClassDeclaration": return this.visitAnonymousDefaultExportedClassDeclaration(node, state, path);
      case "ExportDefaultDeclaration": return this.visitExportDefaultDeclaration(node, state, path);
      case "ExportAllDeclaration": return this.visitExportAllDeclaration(node, state, path);
      case "AwaitExpression": return this.visitAwaitExpression(node, state, path);
      case "JSXMemberExpression": return this.visitJSXMemberExpression(node, state, path);
      case "JSXNamespacedName": return this.visitJSXNamespacedName(node, state, path);
      case "JSXOpeningElement": return this.visitJSXOpeningElement(node, state, path);
      case "JSXClosingElement": return this.visitJSXClosingElement(node, state, path);
      case "JSXSpreadAttribute": return this.visitJSXSpreadAttribute(node, state, path);
      case "JSXElement": return this.visitJSXElement(node, state, path);
      case "JSXFragment": return this.visitJSXFragment(node, state, path);
      case "ImportExpression": return this.visitImportExpression(node, state, path);
      case "RegExpLiteral": return this.visitRegExpLiteral(node, state, path);
      case "FunctionBody": return this.visitFunctionBody(node, state, path);
      case "FunctionDeclaration": return this.visitFunctionDeclaration(node, state, path);
      case "VariableDeclaration": return this.visitVariableDeclaration(node, state, path);
      case "ForOfStatement": return this.visitForOfStatement(node, state, path);
      case "ClassDeclaration": return this.visitClassDeclaration(node, state, path);
      case "JSXIdentifier": return this.visitJSXIdentifier(node, state, path);
      case "BigIntLiteral": return this.visitBigIntLiteral(node, state, path);
    }
    throw new Error("No visit function in AST visitor Visitor for:\n  " + path.join(".") + "\n  " + JSON.stringify(node));
  }
  visitNode(node, state, path) {
    var visitor = this;
    return node;
  }
  visitSourceLocation(node, state, path) {
    var visitor = this;
    // start is of types Position
    node["start"] = visitor.accept(node["start"], state, path.concat(["start"]));
    // end is of types Position
    node["end"] = visitor.accept(node["end"], state, path.concat(["end"]));
    return node;
  }
  visitPosition(node, state, path) {
    var visitor = this;
    return node;
  }
  visitProgram(node, state, path) {
    var visitor = this;
    // body is a list with types Statement, ModuleDeclaration
    var newElements = [];
    for (var i = 0; i < node["body"].length; i++) {
      var ea = node["body"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["body", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["body"] = newElements;
    return node;
  }
  visitFunction(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // params is a list with types Pattern
    var newElements = [];
    for (var i = 0; i < node["params"].length; i++) {
      var ea = node["params"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["params", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["params"] = newElements;
    // body is of types FunctionBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitStatement(node, state, path) {
    var visitor = this;
    return node;
  }
  visitDirective(node, state, path) {
    var visitor = this;
    // expression is of types Literal
    node["expression"] = visitor.accept(node["expression"], state, path.concat(["expression"]));
    return node;
  }
  visitSwitchCase(node, state, path) {
    var visitor = this;
    // test is of types Expression
    if (node["test"]) {
      node["test"] = visitor.accept(node["test"], state, path.concat(["test"]));
    }
    // consequent is a list with types Statement
    var newElements = [];
    for (var i = 0; i < node["consequent"].length; i++) {
      var ea = node["consequent"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["consequent", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["consequent"] = newElements;
    return node;
  }
  visitCatchClause(node, state, path) {
    var visitor = this;
    // param is of types Pattern
    if (node["param"]) {
      node["param"] = visitor.accept(node["param"], state, path.concat(["param"]));
    }
    // body is of types BlockStatement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitVariableDeclarator(node, state, path) {
    var visitor = this;
    // id is of types Pattern
    node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    // init is of types Expression
    if (node["init"]) {
      node["init"] = visitor.accept(node["init"], state, path.concat(["init"]));
    }
    return node;
  }
  visitExpression(node, state, path) {
    var visitor = this;
    return node;
  }
  visitProperty(node, state, path) {
    var visitor = this;
    // key is of types Expression
    node["key"] = visitor.accept(node["key"], state, path.concat(["key"]));
    // value is of types Expression
    node["value"] = visitor.accept(node["value"], state, path.concat(["value"]));
    return node;
  }
  visitPattern(node, state, path) {
    var visitor = this;
    return node;
  }
  visitSuper(node, state, path) {
    var visitor = this;
    return node;
  }
  visitSpreadElement(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitTemplateElement(node, state, path) {
    var visitor = this;
    return node;
  }
  visitClass(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // superClass is of types Expression
    if (node["superClass"]) {
      node["superClass"] = visitor.accept(node["superClass"], state, path.concat(["superClass"]));
    }
    // body is of types ClassBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitClassBody(node, state, path) {
    var visitor = this;
    // body is a list with types MethodDefinition
    var newElements = [];
    for (var i = 0; i < node["body"].length; i++) {
      var ea = node["body"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["body", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["body"] = newElements;
    return node;
  }
  visitMethodDefinition(node, state, path) {
    var visitor = this;
    // key is of types Expression
    node["key"] = visitor.accept(node["key"], state, path.concat(["key"]));
    // value is of types FunctionExpression
    node["value"] = visitor.accept(node["value"], state, path.concat(["value"]));
    return node;
  }
  visitModuleDeclaration(node, state, path) {
    var visitor = this;
    return node;
  }
  visitModuleSpecifier(node, state, path) {
    var visitor = this;
    // local is of types Identifier
    node["local"] = visitor.accept(node["local"], state, path.concat(["local"]));
    return node;
  }
  visitJSXEmptyExpression(node, state, path) {
    var visitor = this;
    return node;
  }
  visitJSXExpressionContainer(node, state, path) {
    var visitor = this;
    // expression is of types Expression, JSXEmptyExpression
    node["expression"] = visitor.accept(node["expression"], state, path.concat(["expression"]));
    return node;
  }
  visitJSXSpreadChild(node, state, path) {
    var visitor = this;
    // expression is of types Expression
    node["expression"] = visitor.accept(node["expression"], state, path.concat(["expression"]));
    return node;
  }
  visitJSXBoundaryElement(node, state, path) {
    var visitor = this;
    // name is of types JSXIdentifier, JSXMemberExpression, JSXNamespacedName
    node["name"] = visitor.accept(node["name"], state, path.concat(["name"]));
    return node;
  }
  visitJSXAttribute(node, state, path) {
    var visitor = this;
    // name is of types JSXIdentifier, JSXNamespacedName
    node["name"] = visitor.accept(node["name"], state, path.concat(["name"]));
    // value is of types Literal, JSXExpressionContainer, JSXElement, JSXFragment
    if (node["value"]) {
      node["value"] = visitor.accept(node["value"], state, path.concat(["value"]));
    }
    return node;
  }
  visitJSXText(node, state, path) {
    var visitor = this;
    return node;
  }
  visitJSXOpeningFragment(node, state, path) {
    var visitor = this;
    return node;
  }
  visitJSXClosingFragment(node, state, path) {
    var visitor = this;
    return node;
  }
  visitIdentifier(node, state, path) {
    var visitor = this;
    return node;
  }
  visitLiteral(node, state, path) {
    var visitor = this;
    return node;
  }
  visitExpressionStatement(node, state, path) {
    var visitor = this;
    // expression is of types Expression
    node["expression"] = visitor.accept(node["expression"], state, path.concat(["expression"]));
    return node;
  }
  visitBlockStatement(node, state, path) {
    var visitor = this;
    // body is a list with types Statement
    var newElements = [];
    for (var i = 0; i < node["body"].length; i++) {
      var ea = node["body"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["body", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["body"] = newElements;
    return node;
  }
  visitEmptyStatement(node, state, path) {
    var visitor = this;
    return node;
  }
  visitDebuggerStatement(node, state, path) {
    var visitor = this;
    return node;
  }
  visitWithStatement(node, state, path) {
    var visitor = this;
    // object is of types Expression
    node["object"] = visitor.accept(node["object"], state, path.concat(["object"]));
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitReturnStatement(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    if (node["argument"]) {
      node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    }
    return node;
  }
  visitLabeledStatement(node, state, path) {
    var visitor = this;
    // label is of types Identifier
    node["label"] = visitor.accept(node["label"], state, path.concat(["label"]));
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitBreakStatement(node, state, path) {
    var visitor = this;
    // label is of types Identifier
    if (node["label"]) {
      node["label"] = visitor.accept(node["label"], state, path.concat(["label"]));
    }
    return node;
  }
  visitContinueStatement(node, state, path) {
    var visitor = this;
    // label is of types Identifier
    if (node["label"]) {
      node["label"] = visitor.accept(node["label"], state, path.concat(["label"]));
    }
    return node;
  }
  visitIfStatement(node, state, path) {
    var visitor = this;
    // test is of types Expression
    node["test"] = visitor.accept(node["test"], state, path.concat(["test"]));
    // consequent is of types Statement
    node["consequent"] = visitor.accept(node["consequent"], state, path.concat(["consequent"]));
    // alternate is of types Statement
    if (node["alternate"]) {
      node["alternate"] = visitor.accept(node["alternate"], state, path.concat(["alternate"]));
    }
    return node;
  }
  visitSwitchStatement(node, state, path) {
    var visitor = this;
    // discriminant is of types Expression
    node["discriminant"] = visitor.accept(node["discriminant"], state, path.concat(["discriminant"]));
    // cases is a list with types SwitchCase
    var newElements = [];
    for (var i = 0; i < node["cases"].length; i++) {
      var ea = node["cases"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["cases", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["cases"] = newElements;
    return node;
  }
  visitThrowStatement(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitTryStatement(node, state, path) {
    var visitor = this;
    // block is of types BlockStatement
    node["block"] = visitor.accept(node["block"], state, path.concat(["block"]));
    // handler is of types CatchClause
    if (node["handler"]) {
      node["handler"] = visitor.accept(node["handler"], state, path.concat(["handler"]));
    }
    // finalizer is of types BlockStatement
    if (node["finalizer"]) {
      node["finalizer"] = visitor.accept(node["finalizer"], state, path.concat(["finalizer"]));
    }
    return node;
  }
  visitWhileStatement(node, state, path) {
    var visitor = this;
    // test is of types Expression
    node["test"] = visitor.accept(node["test"], state, path.concat(["test"]));
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitDoWhileStatement(node, state, path) {
    var visitor = this;
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    // test is of types Expression
    node["test"] = visitor.accept(node["test"], state, path.concat(["test"]));
    return node;
  }
  visitForStatement(node, state, path) {
    var visitor = this;
    // init is of types VariableDeclaration, Expression
    if (node["init"]) {
      node["init"] = visitor.accept(node["init"], state, path.concat(["init"]));
    }
    // test is of types Expression
    if (node["test"]) {
      node["test"] = visitor.accept(node["test"], state, path.concat(["test"]));
    }
    // update is of types Expression
    if (node["update"]) {
      node["update"] = visitor.accept(node["update"], state, path.concat(["update"]));
    }
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitForInStatement(node, state, path) {
    var visitor = this;
    // left is of types VariableDeclaration, Pattern
    node["left"] = visitor.accept(node["left"], state, path.concat(["left"]));
    // right is of types Expression
    node["right"] = visitor.accept(node["right"], state, path.concat(["right"]));
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitDeclaration(node, state, path) {
    var visitor = this;
    return node;
  }
  visitThisExpression(node, state, path) {
    var visitor = this;
    return node;
  }
  visitArrayExpression(node, state, path) {
    var visitor = this;
    // elements is a list with types Expression, SpreadElement
    if (node["elements"]) {
      var newElements = [];
      for (var i = 0; i < node["elements"].length; i++) {
        var ea = node["elements"][i];
        var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["elements", i])) : ea;
        if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
        else newElements.push(acceptedNodes);
      }
      node["elements"] = newElements;
    }
    return node;
  }
  visitObjectExpression(node, state, path) {
    var visitor = this;
    // properties is a list with types Property, SpreadElement
    var newElements = [];
    for (var i = 0; i < node["properties"].length; i++) {
      var ea = node["properties"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["properties", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["properties"] = newElements;
    return node;
  }
  visitFunctionExpression(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // params is a list with types Pattern
    var newElements = [];
    for (var i = 0; i < node["params"].length; i++) {
      var ea = node["params"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["params", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["params"] = newElements;
    // body is of types FunctionBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitUnaryExpression(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitUpdateExpression(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitBinaryExpression(node, state, path) {
    var visitor = this;
    // left is of types Expression
    node["left"] = visitor.accept(node["left"], state, path.concat(["left"]));
    // right is of types Expression
    node["right"] = visitor.accept(node["right"], state, path.concat(["right"]));
    return node;
  }
  visitAssignmentExpression(node, state, path) {
    var visitor = this;
    // left is of types Pattern
    node["left"] = visitor.accept(node["left"], state, path.concat(["left"]));
    // right is of types Expression
    node["right"] = visitor.accept(node["right"], state, path.concat(["right"]));
    return node;
  }
  visitLogicalExpression(node, state, path) {
    var visitor = this;
    // left is of types Expression
    node["left"] = visitor.accept(node["left"], state, path.concat(["left"]));
    // right is of types Expression
    node["right"] = visitor.accept(node["right"], state, path.concat(["right"]));
    return node;
  }
  visitMemberExpression(node, state, path) {
    var visitor = this;
    // object is of types Expression, Super
    node["object"] = visitor.accept(node["object"], state, path.concat(["object"]));
    // property is of types Expression
    node["property"] = visitor.accept(node["property"], state, path.concat(["property"]));
    return node;
  }
  visitConditionalExpression(node, state, path) {
    var visitor = this;
    // test is of types Expression
    node["test"] = visitor.accept(node["test"], state, path.concat(["test"]));
    // alternate is of types Expression
    node["alternate"] = visitor.accept(node["alternate"], state, path.concat(["alternate"]));
    // consequent is of types Expression
    node["consequent"] = visitor.accept(node["consequent"], state, path.concat(["consequent"]));
    return node;
  }
  visitCallExpression(node, state, path) {
    var visitor = this;
    // callee is of types Expression, Super
    node["callee"] = visitor.accept(node["callee"], state, path.concat(["callee"]));
    // arguments is a list with types Expression, SpreadElement
    var newElements = [];
    for (var i = 0; i < node["arguments"].length; i++) {
      var ea = node["arguments"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["arguments", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["arguments"] = newElements;
    return node;
  }
  visitNewExpression(node, state, path) {
    var visitor = this;
    // callee is of types Expression
    node["callee"] = visitor.accept(node["callee"], state, path.concat(["callee"]));
    // arguments is a list with types Expression, SpreadElement
    var newElements = [];
    for (var i = 0; i < node["arguments"].length; i++) {
      var ea = node["arguments"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["arguments", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["arguments"] = newElements;
    return node;
  }
  visitSequenceExpression(node, state, path) {
    var visitor = this;
    // expressions is a list with types Expression
    var newElements = [];
    for (var i = 0; i < node["expressions"].length; i++) {
      var ea = node["expressions"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["expressions", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["expressions"] = newElements;
    return node;
  }
  visitArrowFunctionExpression(node, state, path) {
    var visitor = this;
    // body is of types FunctionBody, Expression
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // params is a list with types Pattern
    var newElements = [];
    for (var i = 0; i < node["params"].length; i++) {
      var ea = node["params"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["params", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["params"] = newElements;
    return node;
  }
  visitYieldExpression(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    if (node["argument"]) {
      node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    }
    return node;
  }
  visitTemplateLiteral(node, state, path) {
    var visitor = this;
    // quasis is a list with types TemplateElement
    var newElements = [];
    for (var i = 0; i < node["quasis"].length; i++) {
      var ea = node["quasis"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["quasis", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["quasis"] = newElements;
    // expressions is a list with types Expression
    var newElements = [];
    for (var i = 0; i < node["expressions"].length; i++) {
      var ea = node["expressions"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["expressions", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["expressions"] = newElements;
    return node;
  }
  visitTaggedTemplateExpression(node, state, path) {
    var visitor = this;
    // tag is of types Expression
    node["tag"] = visitor.accept(node["tag"], state, path.concat(["tag"]));
    // quasi is of types TemplateLiteral
    node["quasi"] = visitor.accept(node["quasi"], state, path.concat(["quasi"]));
    return node;
  }
  visitAssignmentProperty(node, state, path) {
    var visitor = this;
    // value is of types Pattern, Expression
    node["value"] = visitor.accept(node["value"], state, path.concat(["value"]));
    // key is of types Expression
    node["key"] = visitor.accept(node["key"], state, path.concat(["key"]));
    return node;
  }
  visitObjectPattern(node, state, path) {
    var visitor = this;
    // properties is a list with types AssignmentProperty, RestElement
    var newElements = [];
    for (var i = 0; i < node["properties"].length; i++) {
      var ea = node["properties"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["properties", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["properties"] = newElements;
    return node;
  }
  visitArrayPattern(node, state, path) {
    var visitor = this;
    // elements is a list with types Pattern
    if (node["elements"]) {
      var newElements = [];
      for (var i = 0; i < node["elements"].length; i++) {
        var ea = node["elements"][i];
        var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["elements", i])) : ea;
        if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
        else newElements.push(acceptedNodes);
      }
      node["elements"] = newElements;
    }
    return node;
  }
  visitRestElement(node, state, path) {
    var visitor = this;
    // argument is of types Pattern
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitAssignmentPattern(node, state, path) {
    var visitor = this;
    // left is of types Pattern
    node["left"] = visitor.accept(node["left"], state, path.concat(["left"]));
    // right is of types Expression
    node["right"] = visitor.accept(node["right"], state, path.concat(["right"]));
    return node;
  }
  visitClassExpression(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // superClass is of types Expression
    if (node["superClass"]) {
      node["superClass"] = visitor.accept(node["superClass"], state, path.concat(["superClass"]));
    }
    // body is of types ClassBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitMetaProperty(node, state, path) {
    var visitor = this;
    // meta is of types Identifier
    node["meta"] = visitor.accept(node["meta"], state, path.concat(["meta"]));
    // property is of types Identifier
    node["property"] = visitor.accept(node["property"], state, path.concat(["property"]));
    return node;
  }
  visitImportDeclaration(node, state, path) {
    var visitor = this;
    // specifiers is a list with types ImportSpecifier, ImportDefaultSpecifier, ImportNamespaceSpecifier
    var newElements = [];
    for (var i = 0; i < node["specifiers"].length; i++) {
      var ea = node["specifiers"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["specifiers", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["specifiers"] = newElements;
    // source is of types Literal
    node["source"] = visitor.accept(node["source"], state, path.concat(["source"]));
    return node;
  }
  visitImportSpecifier(node, state, path) {
    var visitor = this;
    // imported is of types Identifier
    node["imported"] = visitor.accept(node["imported"], state, path.concat(["imported"]));
    // local is of types Identifier
    node["local"] = visitor.accept(node["local"], state, path.concat(["local"]));
    return node;
  }
  visitImportDefaultSpecifier(node, state, path) {
    var visitor = this;
    // local is of types Identifier
    node["local"] = visitor.accept(node["local"], state, path.concat(["local"]));
    return node;
  }
  visitImportNamespaceSpecifier(node, state, path) {
    var visitor = this;
    // local is of types Identifier
    node["local"] = visitor.accept(node["local"], state, path.concat(["local"]));
    return node;
  }
  visitExportNamedDeclaration(node, state, path) {
    var visitor = this;
    // declaration is of types Declaration
    if (node["declaration"]) {
      node["declaration"] = visitor.accept(node["declaration"], state, path.concat(["declaration"]));
    }
    // specifiers is a list with types ExportSpecifier
    var newElements = [];
    for (var i = 0; i < node["specifiers"].length; i++) {
      var ea = node["specifiers"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["specifiers", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["specifiers"] = newElements;
    // source is of types Literal
    if (node["source"]) {
      node["source"] = visitor.accept(node["source"], state, path.concat(["source"]));
    }
    return node;
  }
  visitExportSpecifier(node, state, path) {
    var visitor = this;
    // exported is of types Identifier
    node["exported"] = visitor.accept(node["exported"], state, path.concat(["exported"]));
    // local is of types Identifier
    node["local"] = visitor.accept(node["local"], state, path.concat(["local"]));
    return node;
  }
  visitAnonymousDefaultExportedFunctionDeclaration(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // params is a list with types Pattern
    var newElements = [];
    for (var i = 0; i < node["params"].length; i++) {
      var ea = node["params"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["params", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["params"] = newElements;
    // body is of types FunctionBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitAnonymousDefaultExportedClassDeclaration(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    if (node["id"]) {
      node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    }
    // superClass is of types Expression
    if (node["superClass"]) {
      node["superClass"] = visitor.accept(node["superClass"], state, path.concat(["superClass"]));
    }
    // body is of types ClassBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitExportDefaultDeclaration(node, state, path) {
    var visitor = this;
    // declaration is of types AnonymousDefaultExportedFunctionDeclaration, FunctionDeclaration, AnonymousDefaultExportedClassDeclaration, ClassDeclaration, Expression
    node["declaration"] = visitor.accept(node["declaration"], state, path.concat(["declaration"]));
    return node;
  }
  visitExportAllDeclaration(node, state, path) {
    var visitor = this;
    // source is of types Literal
    node["source"] = visitor.accept(node["source"], state, path.concat(["source"]));
    return node;
  }
  visitAwaitExpression(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitJSXMemberExpression(node, state, path) {
    var visitor = this;
    // object is of types JSXMemberExpression, JSXIdentifier
    node["object"] = visitor.accept(node["object"], state, path.concat(["object"]));
    // property is of types JSXIdentifier
    node["property"] = visitor.accept(node["property"], state, path.concat(["property"]));
    return node;
  }
  visitJSXNamespacedName(node, state, path) {
    var visitor = this;
    // namespace is of types JSXIdentifier
    node["namespace"] = visitor.accept(node["namespace"], state, path.concat(["namespace"]));
    // name is of types JSXIdentifier
    node["name"] = visitor.accept(node["name"], state, path.concat(["name"]));
    return node;
  }
  visitJSXOpeningElement(node, state, path) {
    var visitor = this;
    // attributes is a list with types JSXAttribute, JSXSpreadAttribute
    var newElements = [];
    for (var i = 0; i < node["attributes"].length; i++) {
      var ea = node["attributes"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["attributes", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["attributes"] = newElements;
    // name is of types JSXIdentifier, JSXMemberExpression, JSXNamespacedName
    node["name"] = visitor.accept(node["name"], state, path.concat(["name"]));
    return node;
  }
  visitJSXClosingElement(node, state, path) {
    var visitor = this;
    // name is of types JSXIdentifier, JSXMemberExpression, JSXNamespacedName
    node["name"] = visitor.accept(node["name"], state, path.concat(["name"]));
    return node;
  }
  visitJSXSpreadAttribute(node, state, path) {
    var visitor = this;
    // argument is of types Expression
    node["argument"] = visitor.accept(node["argument"], state, path.concat(["argument"]));
    return node;
  }
  visitJSXElement(node, state, path) {
    var visitor = this;
    // openingElement is of types JSXOpeningElement
    node["openingElement"] = visitor.accept(node["openingElement"], state, path.concat(["openingElement"]));
    // children is a list with types JSXText, JSXExpressionContainer, JSXSpreadChild, JSXElement, JSXFragment
    var newElements = [];
    for (var i = 0; i < node["children"].length; i++) {
      var ea = node["children"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["children", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["children"] = newElements;
    // closingElement is of types JSXClosingElement
    if (node["closingElement"]) {
      node["closingElement"] = visitor.accept(node["closingElement"], state, path.concat(["closingElement"]));
    }
    return node;
  }
  visitJSXFragment(node, state, path) {
    var visitor = this;
    // openingFragment is of types JSXOpeningFragment
    node["openingFragment"] = visitor.accept(node["openingFragment"], state, path.concat(["openingFragment"]));
    // children is a list with types JSXText, JSXExpressionContainer, JSXSpreadChild, JSXElement, JSXFragment
    var newElements = [];
    for (var i = 0; i < node["children"].length; i++) {
      var ea = node["children"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["children", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["children"] = newElements;
    // closingFragment is of types JSXClosingFragment
    node["closingFragment"] = visitor.accept(node["closingFragment"], state, path.concat(["closingFragment"]));
    return node;
  }
  visitImportExpression(node, state, path) {
    var visitor = this;
    // source is of types Expression
    node["source"] = visitor.accept(node["source"], state, path.concat(["source"]));
    return node;
  }
  visitRegExpLiteral(node, state, path) {
    var visitor = this;
    return node;
  }
  visitFunctionBody(node, state, path) {
    var visitor = this;
    // body is a list with types Directive, Statement
    var newElements = [];
    for (var i = 0; i < node["body"].length; i++) {
      var ea = node["body"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["body", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["body"] = newElements;
    return node;
  }
  visitFunctionDeclaration(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    // params is a list with types Pattern
    var newElements = [];
    for (var i = 0; i < node["params"].length; i++) {
      var ea = node["params"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["params", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["params"] = newElements;
    // body is of types FunctionBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitVariableDeclaration(node, state, path) {
    var visitor = this;
    // declarations is a list with types VariableDeclarator
    var newElements = [];
    for (var i = 0; i < node["declarations"].length; i++) {
      var ea = node["declarations"][i];
      var acceptedNodes = ea ? visitor.accept(ea, state, path.concat(["declarations", i])) : ea;
      if (Array.isArray(acceptedNodes)) newElements.push.apply(newElements, acceptedNodes);
      else newElements.push(acceptedNodes);
    }
    node["declarations"] = newElements;
    return node;
  }
  visitForOfStatement(node, state, path) {
    var visitor = this;
    // left is of types VariableDeclaration, Pattern
    node["left"] = visitor.accept(node["left"], state, path.concat(["left"]));
    // right is of types Expression
    node["right"] = visitor.accept(node["right"], state, path.concat(["right"]));
    // body is of types Statement
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitClassDeclaration(node, state, path) {
    var visitor = this;
    // id is of types Identifier
    node["id"] = visitor.accept(node["id"], state, path.concat(["id"]));
    // superClass is of types Expression
    if (node["superClass"]) {
      node["superClass"] = visitor.accept(node["superClass"], state, path.concat(["superClass"]));
    }
    // body is of types ClassBody
    node["body"] = visitor.accept(node["body"], state, path.concat(["body"]));
    return node;
  }
  visitJSXIdentifier(node, state, path) {
    var visitor = this;
    return node;
  }
  visitBigIntLiteral(node, state, path) {
    var visitor = this;
    return node;
  }

}
export { Visitor }// >>>>>>>>>>>>> END OF AUTO GENERATED CODE >>>>>>>>>>>>>