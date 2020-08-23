// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      // webpack: {
      //   config: 'node_modules/@vue/cli-service/webpack.config.js',
      // },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 换行制式忽略LF以及CRLF
    'linebreak-style': 'off',
    // TODO: 暂时屏蔽以下规则，后续逐个修复
    // 一行代码不要超出150个字符，利于阅读
    'max-len': [
      'error',
      {
        code: 150,
      },
    ],
    'no-console': 'off',
    // 'eqeqeq': 'off', // 使用全等符号比较，即使用 "===, !=="取代 "==, !="
    // 'no-unused-vars': 'off',
    'no-void': 'off', // 允许使用void接表达式，但是后续尽量避免使用void
    // 'no-plusplus': 'off',
    'func-names': 'off', // 允许表达式不具名函数，屏蔽该规则
    // 'no-tabs': 'off',
    'no-param-reassign': 'off', // 放开这项规则，允许直接修改parmas，有时候必须，类似Vue插件，不过尽量避免
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // 允许 StationA && StationB及StationA ? MethodA(): MethodB() 但是不允许无意义的表达式，类似'document.getElementById('id');'
    'no-restricted-syntax': 'off', // 允许使用for in, for of遍历，屏蔽当前规则
    // 'no-multi-assign': 'off',
    'no-continue': 'off', // 允许for循环里使用，不过最后使用if，语义更明确
    'global-require': 'off', // TODO 由于目前太多模块并不是在最顶层require引入，暂时屏蔽校验
    'no-mixed-operators': 'off', // 放开混合运算，屏蔽当前规则校验
    // 'no-use-before-define':'off',
    radix: 'off', // 开启默认10进制转换，屏蔽校验
    // 'no-useless-concat': 'off',
    'consistent-return': 'off', // 允许不同条件分支返回不同类型，不过最好还是避免这种情况，最好返回同种类型
    // 'no-extend-native': 'off',
    // 'no-bitwise': 'off',
    // 'no-shadow': 'off',
    // 'no-prototype-builtins': 'off',
    // 'no-useless-escape': 'off',
    // 'prefer-const': 'off',
    // 'one-var': 'off',
    // 'no-redeclare': 'off',
    // 'no-var': 'off',
    // 'vars-on-top': 'off',
    // 'block-scoped-var': 'off',
    // 'camelcase': 'off',
    // 'no-underscore-dangle': 'off',
    // 'default-case': 'off',
    // 'no-irregular-whitespace': 'off',
    'no-nested-ternary': 'off', // 允许三元表达式嵌套，不过最好避免
    // 'no-return-assign': 'off',
    // 'guard-for-in': 'off',
    // 'no-mixed-spaces-and-tabs': 'off',
    // 'no-new-wrappers': 'off',
    // 'array-callback-return': 'off',
    // 'no-array-constructor': 'off',
    // 'no-dupe-keys': 'off',
    // 'no-empty': 'off',
    // 'no-sequences': 'off',
    // 'no-undef': 'off',
    // 'import/first': 'off',
    'arrow-parens': [0, 'always'],
    'import/prefer-default-export': 'off', // 允许一个模块无default导出
    'import/no-dynamic-require': 'off', // 允许异步导入模块
    // 'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off', // 允许使用第三方模块附加依赖
    'vue/valid-template-root': 'off',
    // 'vue/require-valid-default-prop': 'off',
    // 'vue/no-unused-vars': 'off',
    // 'vue/no-parsing-error': 'off',
    // 'vue/no-dupe-keys': 'off',
    // 'vue/require-v-for-key': 'off',
  },
};
