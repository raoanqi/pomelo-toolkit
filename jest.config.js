module.exports = {
  // 使用 ts-jest 预设，允许 Jest 直接运行 TypeScript 测试文件
  // 无需先将 TypeScript 编译为 JavaScript
  preset: 'ts-jest',

  // 指定测试环境为 Node.js，而不是浏览器环境
  // 适合测试 Node.js 模块、工具函数库等非浏览器代码
  testEnvironment: 'node',

  // 指定 Jest 应该查找哪些文件来运行测试
  // 这里配置为查找任何目录下的 tests 目录中所有以 .test.ts 结尾的文件
  testMatch: ['**/tests/**/*.test.ts'],

  // 启用代码覆盖率收集
  // 当测试运行时，Jest 会跟踪哪些代码被测试执行了，哪些没有
  collectCoverage: true,

  // 指定从哪些文件收集覆盖率信息
  // 这里设置为收集 src 目录下所有 .ts 文件的覆盖率
  collectCoverageFrom: ['src/**/*.ts'],

  // 指定覆盖率报告应该保存在哪个目录
  // 覆盖率报告将输出到项目根目录下的 coverage 文件夹中
  coverageDirectory: 'coverage',

  // 指定生成哪种格式的覆盖率报告
  // text: 在终端中显示覆盖率摘要
  // lcov: 生成可以被其他工具（如 Codecov、Coveralls）使用的详细报告
  coverageReporters: ['text', 'lcov'],

  // 设置覆盖率阈值，如果覆盖率低于这些值，测试将失败
  coverageThreshold: {
    // 全局阈值，适用于所有文件
    global: {
      // 条件分支覆盖率（如 if/else 语句）至少要达到 80%
      branches: 80,
      // 函数覆盖率至少要达到 80%
      functions: 80,
      // 代码行覆盖率至少要达到 80%
      lines: 80,
      // 语句覆盖率至少要达到 80%
      statements: 80,
    },
  },
};
