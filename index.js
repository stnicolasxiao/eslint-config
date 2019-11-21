module.exports = {
  "parserOptions": {
    "ecmaVersion": 9,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },

  "env": {
    "es6": true,
    "node": true
  },

  "plugins": [
  ],

  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },

  "rules": {
    //定义getter，setter必须成对
    "accessor-pairs": "error",
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "block-spacing": ["error", "always"],
    //不允许单行
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "camelcase": ["warn", { "properties": "never" }],
    //不允许多余的逗号
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    //验证super是否调用
    "constructor-super": "error",
    //语句块必须加大括号
    "curly": ["error", "all"],
    //TODO:
    "dot-location": ["error", "property"],
    //文件末尾要留空行
    "eol-last": "error",
    //必须使用全等号，对null不适用
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    //函数调用括号不能有空格
    "func-call-spacing": ["error", "never"],
    //迭代器星号空格控制
    "generator-star-spacing": ["error", { "before": true, "after": false }],
    //"handle-callback-err": ["error", "^(err|error)$"],
    //缩进为2个空格
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": { "parameters": 1, "body": 1 },
      "FunctionExpression": { "parameters": 1, "body": 1 },
      "CallExpression": { "arguments": 1 },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false
    }],
    //key空格
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    //关键字留空格
    "keyword-spacing": ["error", { "before": true, "after": true }],
    //new 后面必须是大写开头的标识符
    "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
    //new 后面必须加括号
    "new-parens": "error",
    //不允许用array构造器构造数组
    "no-array-constructor": "error",
    //不允许使用caller callee
    "no-caller": "error",
    //不允许对类名进行赋值
    "no-class-assign": "error",
    //不允许与-0比较
    "no-compare-neg-zero": "error",
    //不允许在条件表达式里赋值
    "no-cond-assign": "error",
    //不允许对常量赋值
    "no-const-assign": "error",
    //不允许常量状态表达式，允许用于循环
    "no-constant-condition": ["error", { "checkLoops": false }],
    //TODO:
    "no-control-regex": "error",
    //不允许debugger语句
    "no-debugger": "error",
    //不允许delete语句
    "no-delete-var": "error",
    //检查参数名是否重名
    "no-dupe-args": "error",
    //检查类成员是否重名
    "no-dupe-class-members": "error",
    //检查成员key是否重复定义
    "no-dupe-keys": "error",
    //禁止重复的case
    "no-duplicate-case": "error",
    //正则不允许空的类
    "no-empty-character-class": "error",
    //防止解构把默认值{}写成解构子对象
    "no-empty-pattern": "error",
    //不允许eval
    "no-eval": "error",
    //不能对catch中err赋值
    "no-ex-assign": "error",
    //禁止对原生对象进行扩展
    "no-extend-native": "error",
    //禁止没有起作用的bind调用
    "no-extra-bind": "error",
    //在状态表达式里禁止多余的boolean转换
    "no-extra-boolean-cast": "error",
    //TODO:
    "no-extra-parens": ["error", "functions"],
    //禁止case穿透
    "no-fallthrough": "error",
    //不允许浮点数用简写
    "no-floating-decimal": "error",
    //不允许对函数进行复写
    "no-func-assign": "error",
    //不允许对js环境预置变量赋值
    "no-global-assign": "error",
    //不允许隐式的eval，如setTimeout用字符串替代函数
    "no-implied-eval": "error",
    //不在块作用域里定义函数
    "no-inner-declarations": ["error", "functions"],
    //校验regex
    "no-invalid-regexp": "error",
    //禁止非法的空白符
    "no-irregular-whitespace": "error",
    //禁止__iterator__
    "no-iterator": "error",
    //禁止label与同作用域变量同名
    "no-label-var": "error",
    //禁止label
    //"no-labels": ["error", { "allowLoop": true, "allowSwitch": false }],
    //禁止无用的块作用域
    "no-lone-blocks": "error",
    //逻辑表达式必须加必要的括号
    "no-mixed-operators": ["error", {
      "groups": [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],
    //禁止tab和空格混用的缩进
    "no-mixed-spaces-and-tabs": "error",
    //禁止多个空格
    "no-multi-spaces": "error",
    //禁止字符串用反斜杠换行
    "no-multi-str": "error",
    //空行控制
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    //控制!和-不放在表达式开头
    "no-negated-in-lhs": "error",
    //TODO:
    //"no-new": "error",
    "no-new-func": "error",
    //禁止new Object
    "no-new-object": "error",
    //禁止new require
    "no-new-require": "error",
    //禁止new Symbol
    "no-new-symbol": "error",
    //禁止基础类型用new构造
    "no-new-wrappers": "error",
    //禁止用内部对象当函数，如Math()
    "no-obj-calls": "error",
    //禁用八进制
    "no-octal": "error",
    //禁用八进制转移
    "no-octal-escape": "error",
    //nodejs: 禁止手动拼接路径
    "no-path-concat": "error",
    //禁止使用__proto__，用getPrototypeOf替代
    "no-proto": "error",
    //禁止重复定义
    "no-redeclare": "error",
    //禁止在正则里用多个连续空格
    "no-regex-spaces": "error",
    //禁止在return表达式里赋值
    //"no-return-assign": ["error", "except-parens"],
    "no-return-assign": "error",
    //禁止在return里用await
    "no-return-await": "error",
    //禁止自身赋值
    "no-self-assign": "error",
    //禁止自身比较
    "no-self-compare": "error",
    //禁止逗号表达式
    "no-sequences": "error",
    //禁止对保留字进行改动
    "no-shadow-restricted-names": "error",
    //禁止稀疏数组
    "no-sparse-arrays": "error",
    //完全禁止tab
    "no-tabs": "error",
    //禁止在非反引号字符串里用变量引用
    "no-template-curly-in-string": "error",
    //禁止在super之前调用this
    "no-this-before-super": "error",
    //禁止throw一个常量
    "no-throw-literal": "error",
    //禁止行尾的空格
    "no-trailing-spaces": "error",
    //禁止调用未定义的变量
    "no-undef": "error",
    //禁止给变量初始化为undefined
    "no-undef-init": "error",
    //禁止可能引起加分号的换行
    "no-unexpected-multiline": "error",
    //禁止没有终止状态的循环
    "no-unmodified-loop-condition": "error",
    //禁止不必要的三目运算符
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    //检查不可到达的代码
    "no-unreachable": "error",
    //TODO:
    "no-unsafe-finally": "error",
    //禁止单目运算符放在表达式头部
    "no-unsafe-negation": "error",
    //禁止无用的表达式，除了短路表达式，三目表达式和tag表达式
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
    //禁止未引用的变量，参数不做检查，解构rest也不做检查
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    //禁止在变量定义前使用，除了函数定义，类型定义
    "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
    //检查没必要的函数调用
    "no-useless-call": "error",
    //检查无用的key生成符
    "no-useless-computed-key": "error",
    //检查无用的构造函数
    "no-useless-constructor": "error",
    //检查无用的转义符
    "no-useless-escape": "error",
    //检查解构中无用的重命名
    "no-useless-rename": "error",
    //检查没必要的return调用
    "no-useless-return": "error",
    //不允许点操作符前后有空格
    "no-whitespace-before-property": "error",
    //不允许with语句
    "no-with": "error",
    //对象属性定义必须换行
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": false }],
    //TODO:
    //"one-var": ["error", { "initialized": "never" }],
    //操作符换行规则
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    //不允许块作用域前后有空行，blocks，switch，class例外
    "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }],
    //reject必须传入Error
    "prefer-promise-reject-errors": "error",
    //字符串必须使用单引号
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    //禁止在解构...后加空格
    "rest-spread-spacing": ["error", "never"],
    //行末必须写分号
    "semi": ["error", "always"],
    //分号前不带空格
    "semi-spacing": ["error", { "before": false, "after": true }],
    //开大括号前要保留空格
    "space-before-blocks": ["error", "always"],
    //函数定义参数列表开括号前不留空格
    "space-before-function-paren": ["error", "never"],
    //括号里不留空格
    "space-in-parens": ["error", "never"],
    //操作符两边留空
    "space-infix-ops": "error",
    //单目操作符留空格
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    //注释留空格
    "spaced-comment": ["error", "always", {
      "line": { "markers": ["*package", "!", "/", ",", "="] },
      "block": { "balanced": true, "markers": ["*package", "!", ",", ":", "::", "flow-include"], "exceptions": ["*"] }
    }],
    //symbal定义未传入
    "symbol-description": "error",
    //模板字符串中占位符中不留空格
    "template-curly-spacing": ["error", "never"],
    //TODO:
    "template-tag-spacing": ["error", "never"],
    //禁止BOM头
    "unicode-bom": ["error", "never"],
    //禁止使用NaN变量
    "use-isnan": "error",
    //检查typeof类型，并限定只能跟字符串类型名
    "valid-typeof": ["error", { "requireStringLiterals": true }],
    //TODO:
    "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],
    //迭代器星号空格
    "yield-star-spacing": ["error", "both"],
    //禁用yoda表达式（常量前置比较）
    "yoda": ["error", "never"],
    //对象括号内不留空
    "object-curly-spacing": ["error", "never"],
    //计算key内不留空格
    "computed-property-spacing": ["error", "never"],
    //数组括号内不留空格
    "array-bracket-spacing": ["error", "never"]
  }
}