/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-04-23 20:15:44
 * @LastEditTime: 2023-04-23 20:40:55
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    env: true
  },
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: '',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser', // 指定 ESLint 解析器
    ecmaVersion: 2020, // 允许解析现代 ECMAScript 功能
    sourceType: 'module' // 使用esm
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? 1 : 0,
    // "no-debugger": process.env.NODE_ENV === "production" ? 1 : 0,
    eqeqeq: 2, // 要求使用 === 和 !==
    'no-undef': 2, // 禁用未声明的变量
    '@typescript-eslint/no-unused-vars': 2, // 禁止出现未使用过的变量
    'vars-on-top': 0, // 要求所有的 var 声明出现在它们所在的作用域顶部
    'prefer-destructuring': 0, // 优先使用数组和对象解构
    'no-useless-concat': 1, // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 0, // 禁止不必要的转义字符
    'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
    camelcase: 0, // 强制使用骆驼拼写法命名约定
    '@typescript-eslint/no-redeclare': 1, // 禁止多次声明同一变量
    'array-callback-return': 1, // 强制数组方法的回调函数中有 return 语句,Array有几种过滤，映射和折叠的方法。如果我们忘记return在这些回调中写入语句，那可能是一个错误。
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'no-fallthrough': 1, // 禁止 case 语句落空
    'no-lonely-if': 1, // 禁止 if 作为唯一的语句出现在 else 语句中.如果一个if陈述是该else块中唯一的陈述，那么使用一个else if表格通常会更清晰。
    'no-irregular-whitespace': 1, // 禁止在字符串和注释之外不规则的空白
    'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量.如果一个变量从不重新分配，使用const声明更好。const 声明告诉读者，“这个变量永远不会被重新分配，”减少认知负荷并提高可维护性。
    'no-use-before-define': 1, // 禁止在变量定义之前使用它们
    '@typescript-eslint/explicit-module-boundary-types': 0, // 不要求导出函数和类的公共类方法的显式返回和参数类型。
    '@typescript-eslint/no-var-requires': 0, // 允许使用变量接收requires导入
    '@typescript-eslint/ban-ts-comment': 0, // 允许使用指令注释
    '@typescript-eslint/no-explicit-any': 2, // 禁用any
    '@typescript-eslint/no-empty-function': 2, // 禁用空函数
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
