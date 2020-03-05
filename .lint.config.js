module.exports = {"env":{"es6":true,"es2020":true,"jest":true,"node":true,"commonjs":true},"globals":{},"parser":"/home/charlike/github/hela/node_modules/babel-eslint/lib/index.js","parserOptions":{"ecmaVersion":2020,"sourceType":"module","ecmaFeatures":{"generators":false,"objectLiteralDuplicateProperties":false}},"plugins":["import","prettier","no-use-extend-native","node","promise","unicorn"],"rules":{"import/no-unresolved":["off",{"commonjs":true,"caseSensitive":true}],"unicorn/prevent-abbreviations":["off"],"prefer-destructuring":["error",{"object":true,"array":false}],"unicorn/no-unreadable-array-destructuring":["error"],"unicorn/no-unused-properties":["error"],"unicorn/no-unsafe-regex":["error"],"unicorn/import-index":["off"],"unicorn/custom-error-definition":["error"],"unicorn/filename-case":["off"],"unicorn/catch-error-name":["error",{"name":"err"}],"unicorn/prefer-add-event-listener":["off"],"unicorn/no-process-exit":["error"],"unicorn/consistent-function-scoping":["error"],"unicorn/error-message":["error"],"unicorn/escape-case":["error"],"unicorn/expiring-todo-comments":["error"],"unicorn/explicit-length-check":["error"],"unicorn/new-for-builtins":["error"],"unicorn/no-abusive-eslint-disable":["error"],"unicorn/no-array-instanceof":["error"],"unicorn/no-console-spaces":["error"],"unicorn/no-fn-reference-in-iterator":["off"],"unicorn/no-for-loop":["error"],"unicorn/no-hex-escape":["error"],"unicorn/no-keyword-prefix":["off"],"no-nested-ternary":["off"],"unicorn/no-nested-ternary":["error"],"unicorn/no-new-buffer":["error"],"unicorn/no-zero-fractions":["error"],"unicorn/number-literal-case":["error"],"unicorn/prefer-dataset":["error"],"unicorn/prefer-event-key":["error"],"unicorn/prefer-exponentiation-operator":["error"],"unicorn/prefer-flat-map":["error"],"unicorn/prefer-includes":["error"],"unicorn/prefer-modern-dom-apis":["error"],"unicorn/prefer-negative-index":["error"],"unicorn/prefer-node-append":["error"],"unicorn/prefer-node-remove":["error"],"unicorn/prefer-query-selector":["error"],"unicorn/prefer-reflect-apply":["error"],"unicorn/prefer-spread":["error"],"unicorn/prefer-starts-ends-with":["error"],"unicorn/prefer-string-slice":["error"],"unicorn/prefer-text-content":["error"],"unicorn/prefer-trim-start-end":["error"],"unicorn/prefer-type-error":["error"],"unicorn/regex-shorthand":["error"],"unicorn/throw-new-error":["error"],"promise/catch-or-return":["off"],"promise/always-return":["off"],"promise/no-native":["off"],"promise/no-nesting":["off"],"promise/no-promise-in-callback":["off"],"promise/no-callback-in-promise":["off"],"promise/avoid-new":["off"],"promise/prefer-await-to-then":["error"],"promise/prefer-await-to-callbacks":["error"],"promise/no-return-wrap":["error",{"allowReject":true}],"promise/param-names":["error"],"promise/no-new-statics":["error"],"promise/no-return-in-finally":["error"],"promise/valid-params":["error"],"node/no-deprecated-api":["error"],"node/no-exports-assign":["error"],"node/no-unpublished-bin":["error"],"node/no-unsupported-features/es-builtins":["error"],"node/no-unsupported-features/es-syntax":["off"],"node/no-unsupported-features/node-builtins":["error"],"no-process-exit":["off"],"node/process-exit-as-throw":["error"],"node/shebang":["error"],"node/exports-style":["off"],"node/file-extension-in-import":["error","never",{".css":"always",".scss":"always",".sass":"always",".less":"always",".json":"always"}],"node/prefer-global/buffer":["error"],"node/prefer-global/console":["error"],"node/prefer-global/process":["error"],"node/prefer-global/text-decoder":["error"],"node/prefer-global/text-encoder":["error"],"node/prefer-global/url-search-params":["error"],"node/prefer-global/url":["error"],"node/prefer-promises/dns":["error"],"node/prefer-promises/fs":["error"],"no-empty":["error",{"allowEmptyCatch":true}],"no-extend-native":["error"],"no-use-extend-native/no-use-extend-native":["error"],"strict":["off","global"],"func-names":["error","always"],"arrow-parens":["error","always",{"requireForBlockBody":true}],"prefer-arrow-callback":["error",{"allowNamedFunctions":true,"allowUnboundThis":true}],"max-params":["error",{"max":3}],"max-statements":["error",{"max":20}],"max-statements-per-line":["error",{"max":1}],"max-nested-callbacks":["error",{"max":4}],"max-depth":["error",{"max":4}],"arrow-body-style":["error","as-needed",{"requireReturnForObjectLiteral":false}],"no-use-before-define":["error",{"functions":false,"classes":true,"variables":true}],"no-param-reassign":["error",{"props":true,"ignorePropertyModificationsFor":["acc","accumulator","e","ctx","req","request","res","response","$scope","staticContext","err","x","_","opts","options","settings","config","cfg"]}],"no-unused-vars":["error",{"ignoreRestSiblings":true,"vars":"all","varsIgnorePattern":"^(?:$$|xx|_|__|[iI]gnor(?:e|ing|ed))","args":"after-used","argsIgnorePattern":"^(?:$$|xx|_|__|[iI]gnor(?:e|ing|ed))","caughtErrors":"none"}],"import/namespace":["error",{"allowComputed":true}],"import/no-absolute-path":["error"],"import/no-webpack-loader-syntax":["error"],"import/no-self-import":["error"],"import/no-amd":["error"],"import/no-duplicates":["error"],"import/no-extraneous-dependencies":["off",{"devDependencies":["test/**","tests/**","spec/**","**/__tests__/**","**/__mocks__/**","test.{js,jsx}","test-*.{js,jsx}","**/*{.,_}{test,spec}.{js,jsx}","**/jest.config.js","**/jest.setup.js","**/vue.config.js","**/webpack.config.js","**/webpack.config.*.js","**/rollup.config.js","**/rollup.config.*.js","**/gulpfile.js","**/gulpfile.*.js","**/Gruntfile{,.js}","**/protractor.conf.js","**/protractor.conf.*.js"],"optionalDependencies":false}],"import/no-mutable-exports":["error"],"import/no-named-as-default-member":["error"],"import/no-named-as-default":["error"],"import/order":["error",{"groups":[["builtin","external","internal"]]}],"import/no-unassigned-import":["error",{"allow":["@babel/polyfill","@babel/register"]}],"import/prefer-default-export":["off"],"import/extensions":["off","ignorePackages",{"js":"never","mjs":"never","jsx":"never"}],"import/exports-last":["off"],"import/no-unused-modules":["off",{"ignoreExports":[],"missingExports":true,"unusedExports":true}],"import/no-useless-path-segments":["error",{"noUselessIndex":false}],"prettier/prettier":["error"],"curly":[0,"multi-line"],"lines-around-comment":[0],"max-len":[0,100,2,{"ignoreUrls":true,"ignoreComments":false,"ignoreRegExpLiterals":true,"ignoreStrings":true,"ignoreTemplateLiterals":true}],"no-confusing-arrow":[0,{"allowParens":true}],"no-mixed-operators":[0,{"groups":[["%","**"],["%","+"],["%","-"],["%","*"],["%","/"],["/","*"],["&","|","<<",">>",">>>"],["==","!=","===","!=="],["&&","||"]],"allowSamePrecedence":false}],"no-tabs":[0],"no-unexpected-multiline":[0],"quotes":[0,"single",{"avoidEscape":true}],"array-bracket-newline":["off","consistent"],"array-bracket-spacing":["off","never"],"array-element-newline":["off",{"multiline":true,"minItems":3}],"arrow-spacing":["off",{"before":true,"after":true}],"block-spacing":["off","always"],"brace-style":["off","1tbs",{"allowSingleLine":true}],"comma-dangle":["off",{"arrays":"always-multiline","objects":"always-multiline","imports":"always-multiline","exports":"always-multiline","functions":"always-multiline"}],"comma-spacing":["off",{"before":false,"after":true}],"comma-style":["off","last",{"exceptions":{"ArrayExpression":false,"ArrayPattern":false,"ArrowFunctionExpression":false,"CallExpression":false,"FunctionDeclaration":false,"FunctionExpression":false,"ImportDeclaration":false,"ObjectExpression":false,"ObjectPattern":false,"VariableDeclaration":false,"NewExpression":false}}],"computed-property-spacing":["off","never"],"dot-location":["off","property"],"eol-last":["off","always"],"func-call-spacing":["off","never"],"function-call-argument-newline":["off"],"function-paren-newline":["off","consistent"],"generator-star":["off"],"generator-star-spacing":["off",{"before":false,"after":true}],"implicit-arrow-linebreak":["off","beside"],"indent":["off",2,{"SwitchCase":1,"VariableDeclarator":1,"outerIIFEBody":1,"FunctionDeclaration":{"parameters":1,"body":1},"FunctionExpression":{"parameters":1,"body":1},"CallExpression":{"arguments":1},"ArrayExpression":1,"ObjectExpression":1,"ImportDeclaration":1,"flatTernaryExpressions":false,"ignoredNodes":["JSXElement","JSXElement > *","JSXAttribute","JSXIdentifier","JSXNamespacedName","JSXMemberExpression","JSXSpreadAttribute","JSXExpressionContainer","JSXOpeningElement","JSXClosingElement","JSXText","JSXEmptyExpression","JSXSpreadChild"],"ignoreComments":false}],"jsx-quotes":["off","prefer-double"],"key-spacing":["off",{"beforeColon":false,"afterColon":true}],"keyword-spacing":["off",{"before":true,"after":true,"overrides":{"return":{"after":true},"throw":{"after":true},"case":{"after":true}}}],"linebreak-style":["off","unix"],"multiline-ternary":["off","never"],"newline-per-chained-call":["off",{"ignoreChainWithDepth":4}],"new-parens":["off"],"no-arrow-condition":["off"],"no-comma-dangle":["off"],"no-extra-parens":["off","all",{"conditionalAssign":true,"nestedBinaryExpressions":false,"returnAssign":false,"ignoreJSX":"all","enforceForArrowConditionals":false}],"no-extra-semi":["off"],"no-floating-decimal":["off"],"no-mixed-spaces-and-tabs":["off"],"no-multi-spaces":["off",{"ignoreEOLComments":false}],"no-multiple-empty-lines":["off",{"max":2,"maxBOF":1,"maxEOF":0}],"no-reserved-keys":["off"],"no-space-before-semi":["off"],"no-trailing-spaces":["off",{"skipBlankLines":false,"ignoreComments":false}],"no-whitespace-before-property":["off"],"no-wrap-func":["off"],"nonblock-statement-body-position":["off","beside",{"overrides":{}}],"object-curly-newline":["off",{"ObjectExpression":{"minProperties":4,"multiline":true,"consistent":true},"ObjectPattern":{"minProperties":4,"multiline":true,"consistent":true},"ImportDeclaration":{"minProperties":4,"multiline":true,"consistent":true},"ExportDeclaration":{"minProperties":4,"multiline":true,"consistent":true}}],"object-curly-spacing":["off","always"],"object-property-newline":["off",{"allowAllPropertiesOnSameLine":true,"allowMultiplePropertiesPerLine":false}],"one-var-declaration-per-line":["off","always"],"operator-linebreak":["off","before",{"overrides":{"=":"none"}}],"padded-blocks":["off",{"blocks":"never","classes":"never","switches":"never"},{"allowSingleLineBlocks":true}],"quote-props":["off","as-needed",{"keywords":false,"unnecessary":true,"numbers":false}],"rest-spread-spacing":["off","never"],"semi":["off","always"],"semi-spacing":["off",{"before":false,"after":true}],"semi-style":["off","last"],"space-after-function-name":["off"],"space-after-keywords":["off"],"space-before-blocks":["off"],"space-before-function-paren":["off",{"anonymous":"always","named":"never","asyncArrow":"always"}],"space-before-function-parentheses":["off"],"space-before-keywords":["off"],"space-in-brackets":["off"],"space-in-parens":["off","never"],"space-infix-ops":["off"],"space-return-throw-case":["off"],"space-unary-ops":["off",{"words":true,"nonwords":false,"overrides":{}}],"space-unary-word-ops":["off"],"switch-colon-spacing":["off",{"after":true,"before":false}],"template-curly-spacing":["off"],"template-tag-spacing":["off","never"],"unicode-bom":["off","never"],"wrap-iife":["off","outside",{"functionPrototypeMethods":false}],"wrap-regex":["off"],"yield-star-spacing":["off","after"],"indent-legacy":["off"],"no-spaced-func":["off"],"import/named":["error"],"import/default":["off"],"import/export":["error"],"import/no-deprecated":["off"],"import/no-commonjs":["off"],"import/no-nodejs-modules":["off"],"import/first":["error"],"import/imports-first":["off"],"import/no-namespace":["off"],"import/newline-after-import":["error"],"import/no-restricted-paths":["off"],"import/max-dependencies":["off",{"max":10}],"import/no-dynamic-require":["error"],"import/no-internal-modules":["off",{"allow":[]}],"import/unambiguous":["off"],"import/no-named-default":["error"],"import/no-anonymous-default-export":["off",{"allowArray":false,"allowArrowFunction":false,"allowAnonymousClass":false,"allowAnonymousFunction":false,"allowLiteral":false,"allowObject":false}],"import/group-exports":["off"],"import/no-default-export":["off"],"import/no-named-export":["off"],"import/no-cycle":["error",{"maxDepth":null}],"import/dynamic-import-chunkname":["off",{"importFunctions":[],"webpackChunknameFormat":"[0-9a-zA-Z-_/.]+"}],"import/no-relative-parent-imports":["off"],"constructor-super":["error"],"no-class-assign":["error"],"no-const-assign":["error"],"no-dupe-class-members":["error"],"no-duplicate-imports":["off"],"no-new-symbol":["error"],"no-restricted-imports":["off",{"paths":[],"patterns":[]}],"no-this-before-super":["error"],"no-useless-computed-key":["error"],"no-useless-constructor":["error"],"no-useless-rename":["error",{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}],"no-var":["error"],"object-shorthand":["error","always",{"ignoreConstructors":false,"avoidQuotes":true}],"prefer-const":["error",{"destructuring":"any","ignoreReadBeforeAssign":true}],"prefer-numeric-literals":["error"],"prefer-reflect":["off"],"prefer-rest-params":["error"],"prefer-spread":["error"],"prefer-template":["error"],"require-yield":["error"],"sort-imports":["off",{"ignoreCase":false,"ignoreDeclarationSort":false,"ignoreMemberSort":false,"memberSyntaxSortOrder":["none","all","multiple","single"]}],"symbol-description":["error"],"init-declarations":["off"],"no-catch-shadow":["off"],"no-delete-var":["error"],"no-label-var":["error"],"no-restricted-globals":["error","isFinite","isNaN","addEventListener","blur","close","closed","confirm","defaultStatus","defaultstatus","event","external","find","focus","frameElement","frames","history","innerHeight","innerWidth","length","location","locationbar","menubar","moveBy","moveTo","name","onblur","onerror","onfocus","onload","onresize","onunload","open","opener","opera","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","print","removeEventListener","resizeBy","resizeTo","screen","screenLeft","screenTop","screenX","screenY","scroll","scrollbars","scrollBy","scrollTo","scrollX","scrollY","self","status","statusbar","stop","toolbar","top"],"no-shadow":["error"],"no-shadow-restricted-names":["error"],"no-undef":["error"],"no-undef-init":["error"],"no-undefined":["off"],"camelcase":["error",{"properties":"never","ignoreDestructuring":false,"ignoreImports":false}],"capitalized-comments":["off","never",{"line":{"ignorePattern":".*","ignoreInlineComments":true,"ignoreConsecutiveComments":true},"block":{"ignorePattern":".*","ignoreInlineComments":true,"ignoreConsecutiveComments":true}}],"consistent-this":["off"],"func-name-matching":["off","always",{"includeCommonJSModuleExports":false,"considerPropertyDescriptor":true}],"func-style":["off","expression"],"id-blacklist":["off"],"id-length":["off"],"id-match":["off"],"line-comment-position":["off",{"position":"above","ignorePattern":"","applyDefaultPatterns":true}],"lines-between-class-members":["error","always",{"exceptAfterSingleLine":false}],"lines-around-directive":["error",{"before":"always","after":"always"}],"max-lines":["off",{"max":300,"skipBlankLines":true,"skipComments":true}],"max-lines-per-function":["off",{"max":50,"skipBlankLines":true,"skipComments":true,"IIFEs":true}],"multiline-comment-style":["off","starred-block"],"new-cap":["error",{"newIsCap":true,"newIsCapExceptions":[],"capIsNew":false,"capIsNewExceptions":["Immutable.Map","Immutable.Set","Immutable.List"],"properties":true}],"newline-after-var":["off"],"newline-before-return":["off"],"no-array-constructor":["error"],"no-bitwise":["error"],"no-continue":["error"],"no-inline-comments":["off"],"no-lonely-if":["error"],"no-multi-assign":["error"],"no-negated-condition":["off"],"no-new-object":["error"],"no-plusplus":["error"],"no-restricted-syntax":["error",{"selector":"ForInStatement","message":"for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."},{"selector":"ForOfStatement","message":"iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."},{"selector":"LabeledStatement","message":"Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."},{"selector":"WithStatement","message":"`with` is disallowed in strict mode because it makes code impossible to predict and optimize."}],"no-ternary":["off"],"no-underscore-dangle":["error",{"allow":[],"allowAfterThis":false,"allowAfterSuper":false,"enforceInMethodNames":true,"allowAfterThisConstructor":false}],"no-unneeded-ternary":["error",{"defaultAssignment":false}],"one-var":["error","never"],"operator-assignment":["error","always"],"padding-line-between-statements":["off"],"prefer-object-spread":["error"],"require-jsdoc":["off"],"sort-keys":["off","asc",{"caseSensitive":false,"natural":true}],"sort-vars":["off"],"spaced-comment":["error","always",{"line":{"exceptions":["-","+"],"markers":["=","!"]},"block":{"exceptions":["-","+"],"markers":["=","!",":","::"],"balanced":true}}],"callback-return":["off"],"global-require":["error"],"handle-callback-err":["off"],"no-buffer-constructor":["error"],"no-mixed-requires":["off",false],"no-new-require":["error"],"no-path-concat":["error"],"no-process-env":["off"],"no-restricted-modules":["off"],"no-sync":["off"],"for-direction":["error"],"getter-return":["error",{"allowImplicit":true}],"no-async-promise-executor":["error"],"no-await-in-loop":["error"],"no-compare-neg-zero":["error"],"no-cond-assign":["error","always"],"no-console":["warn"],"no-constant-condition":["warn"],"no-control-regex":["error"],"no-debugger":["error"],"no-dupe-args":["error"],"no-dupe-keys":["error"],"no-duplicate-case":["error"],"no-empty-character-class":["error"],"no-ex-assign":["error"],"no-extra-boolean-cast":["error"],"no-func-assign":["error"],"no-inner-declarations":["error"],"no-invalid-regexp":["error"],"no-irregular-whitespace":["error"],"no-misleading-character-class":["error"],"no-obj-calls":["error"],"no-prototype-builtins":["error"],"no-regex-spaces":["error"],"no-sparse-arrays":["error"],"no-template-curly-in-string":["error"],"no-unreachable":["error"],"no-unsafe-finally":["error"],"no-unsafe-negation":["error"],"no-negated-in-lhs":["off"],"require-atomic-updates":["off"],"use-isnan":["error"],"valid-jsdoc":["off"],"valid-typeof":["error",{"requireStringLiterals":true}],"accessor-pairs":["off"],"array-callback-return":["error",{"allowImplicit":true}],"block-scoped-var":["error"],"complexity":["off",11],"class-methods-use-this":["error",{"exceptMethods":[]}],"consistent-return":["error"],"default-case":["error",{"commentPattern":"^no default$"}],"dot-notation":["error",{"allowKeywords":true,"allowPattern":""}],"eqeqeq":["error","always",{"null":"ignore"}],"guard-for-in":["error"],"max-classes-per-file":["error",1],"no-alert":["warn"],"no-caller":["error"],"no-case-declarations":["error"],"no-div-regex":["off"],"no-else-return":["error",{"allowElseIf":false}],"no-empty-function":["error",{"allow":["arrowFunctions","functions","methods"]}],"no-empty-pattern":["error"],"no-eq-null":["off"],"no-eval":["error"],"no-extra-bind":["error"],"no-extra-label":["error"],"no-fallthrough":["error"],"no-global-assign":["error",{"exceptions":[]}],"no-native-reassign":["off"],"no-implicit-coercion":["off",{"boolean":false,"number":true,"string":true,"allow":[]}],"no-implicit-globals":["off"],"no-implied-eval":["error"],"no-invalid-this":["off"],"no-iterator":["error"],"no-labels":["error",{"allowLoop":false,"allowSwitch":false}],"no-lone-blocks":["error"],"no-loop-func":["error"],"no-magic-numbers":["off",{"ignore":[],"ignoreArrayIndexes":true,"enforceConst":true,"detectObjects":false}],"no-multi-str":["error"],"no-new":["error"],"no-new-func":["error"],"no-new-wrappers":["error"],"no-octal":["error"],"no-octal-escape":["error"],"no-proto":["error"],"no-redeclare":["error"],"no-restricted-properties":["error",{"object":"arguments","property":"callee","message":"arguments.callee is deprecated"},{"object":"global","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"self","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"window","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"global","property":"isNaN","message":"Please use Number.isNaN instead"},{"object":"self","property":"isNaN","message":"Please use Number.isNaN instead"},{"object":"window","property":"isNaN","message":"Please use Number.isNaN instead"},{"property":"__defineGetter__","message":"Please use Object.defineProperty instead."},{"property":"__defineSetter__","message":"Please use Object.defineProperty instead."},{"object":"Math","property":"pow","message":"Use the exponentiation operator (**) instead."}],"no-return-assign":["error","always"],"no-return-await":["error"],"no-script-url":["error"],"no-self-assign":["error",{"props":true}],"no-self-compare":["error"],"no-sequences":["error"],"no-throw-literal":["error"],"no-unmodified-loop-condition":["off"],"no-unused-expressions":["error",{"allowShortCircuit":false,"allowTernary":false,"allowTaggedTemplates":false}],"no-unused-labels":["error"],"no-useless-call":["off"],"no-useless-catch":["error"],"no-useless-concat":["error"],"no-useless-escape":["error"],"no-useless-return":["error"],"no-void":["error"],"no-warning-comments":["off",{"terms":["todo","fixme","xxx"],"location":"start"}],"no-with":["error"],"prefer-promise-reject-errors":["error",{"allowEmptyReject":true}],"prefer-named-capture-group":["off"],"radix":["error"],"require-await":["off"],"require-unicode-regexp":["off"],"vars-on-top":["error"],"yoda":["error"]},"settings":{"node":{"allowModules":["@hela/build","@hela/check","@hela/commit","@hela/docs","@hela/format","@hela/lint","@hela/test","@hela/cli","@hela/core","@hela/yaro","@hela/eslint","hela","@hela/dev"],"tryExtensions":[".js",".mjs",".cjs",".jsx",".md",".mdx",".ts",".tsx",".json"]},"import/resolver":{"node":{"paths":["commands","modules","packages","presets"],"extensions":[".js",".mjs",".cjs",".jsx",".md",".mdx",".ts",".tsx",".json"],"tryExtensions":[".js",".mjs",".cjs",".jsx",".md",".mdx",".ts",".tsx",".json"],"moduleDirectory":["node_modules","commands","modules","packages","presets","/home/charlike/github/hela/commands/build/src","/home/charlike/github/hela/commands/check/src","/home/charlike/github/hela/commands/commit/src","/home/charlike/github/hela/commands/docs/src","/home/charlike/github/hela/commands/format/src","/home/charlike/github/hela/commands/lint/src","/home/charlike/github/hela/commands/test/src","/home/charlike/github/hela/modules/cli/src","/home/charlike/github/hela/modules/core/src","/home/charlike/github/hela/modules/yaro/src","/home/charlike/github/hela/packages/eslint/src","/home/charlike/github/hela/packages/hela/src","/home/charlike/github/hela/presets/dev/src"]},"alias":{"map":[["@hela/build","/home/charlike/github/hela/commands/build/src"],["@hela/check","/home/charlike/github/hela/commands/check/src"],["@hela/commit","/home/charlike/github/hela/commands/commit/src"],["@hela/docs","/home/charlike/github/hela/commands/docs/src"],["@hela/format","/home/charlike/github/hela/commands/format/src"],["@hela/lint","/home/charlike/github/hela/commands/lint/src"],["@hela/test","/home/charlike/github/hela/commands/test/src"],["@hela/cli","/home/charlike/github/hela/modules/cli/src"],["@hela/core","/home/charlike/github/hela/modules/core/src"],["@hela/yaro","/home/charlike/github/hela/modules/yaro/src"],["@hela/eslint","/home/charlike/github/hela/packages/eslint/src"],["hela","/home/charlike/github/hela/packages/hela/src"],["@hela/dev","/home/charlike/github/hela/presets/dev/src"]],"extensions":[".js",".mjs",".cjs",".jsx",".md",".mdx",".ts",".tsx",".json"]}},"import/extensions":[".js",".mjs",".cjs",".jsx",".md",".mdx",".ts",".tsx",".json"],"import/core-modules":["electron","atom"],"import/ignore":["node_modules","\\.(coffee|scss|css|less|hbs|svg|json)$"]},"ignorePatterns":["CHANGELOG.md","dist","!*.*js","!*.*ts","memoize-fs.js"]}