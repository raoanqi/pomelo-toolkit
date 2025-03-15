module.exports = {
  root: true,
  // 指定解析器为 TypeScript ESLint 解析器
  parser: '@typescript-eslint/parser',
  // 扩展推荐的规则集
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  // 指定环境
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  // 使用的插件
  plugins: ['@typescript-eslint'],
  // 解析器选项
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  // 自定义规则
  rules: {
    // 禁止使用 any 类型
    '@typescript-eslint/no-explicit-any': 'error',
    // 要求显式函数返回类型
    '@typescript-eslint/explicit-function-return-type': 'error',
    // 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 强制使用 === 和 !==
    eqeqeq: ['error', 'always'],
    // 禁止使用 console
    'no-console': 'warn',
    // 要求或禁止尾随逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 强制使用一致的缩进
    indent: ['error', 2],
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 强制使用一致的引号风格
    quotes: ['error', 'single'],
    // 要求或禁止使用分号
    semi: ['error', 'always'],
  },
  // 针对不同文件的覆盖规则
  overrides: [
    {
      // 对于 JavaScript 文件不需要 TypeScript 的规则
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      // 对于源代码 TypeScript 文件使用更严格的规则
      files: ['src/**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // TypeScript 特定规则可以在这里添加
      },
    },
    {
      // 对于测试文件的特殊配置
      files: ['tests/**/*.ts', '**/*.test.ts'],
      rules: {
        // 测试文件中允许使用 any
        '@typescript-eslint/no-explicit-any': 'off',
        // 测试文件中不要求显式函数返回类型
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
