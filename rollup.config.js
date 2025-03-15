// @rollup/plugin-node-resolve：帮助 Rollup 查找外部模块（node_modules 中的依赖）
const resolve = require('@rollup/plugin-node-resolve');
// @rollup/plugin-commonjs：将 CommonJS 模块转换为 ES 模块，使其可以被 Rollup 处理
const commonjs = require('@rollup/plugin-commonjs');
// @rollup/plugin-typescript：使 Rollup 能够处理 TypeScript 文件
const typescript = require('@rollup/plugin-typescript');
// rollup-plugin-dts：生成 TypeScript 声明文件（.d.ts）的 bundle
const { dts } = require('rollup-plugin-dts');
// 导入 package.json 文件，用于获取输出文件路径等配置
const packageJson = require('./package.json');

// 导出 Rollup 配置数组，每个对象代表一个独立的构建任务
module.exports = [
  // 第一个构建任务：构建主要的 JavaScript 代码
  {
    // 指定构建的入口文件
    input: 'src/index.ts',
    // 指定构建的输出配置，这里有两种格式的输出
    output: [
      {
        // CommonJS 格式输出，用于 Node.js 环境
        file: packageJson.main, // 从 package.json 中获取输出文件路径（dist/index.js）
        format: 'cjs', // CommonJS 格式
        sourcemap: true, // 生成 source map 文件，便于调试
        exports: 'named', // 使用命名导出方式，而不是默认导出
      },
      {
        // ES Module 格式输出，用于现代浏览器和打包工具
        file: packageJson.module, // 从 package.json 中获取输出文件路径（dist/index.esm.js）
        format: 'esm', // ES Module 格式
        sourcemap: true, // 生成 source map 文件
        exports: 'named', // 使用命名导出方式
      },
    ],
    // 使用的插件列表
    plugins: [
      // 解析 node_modules 中的依赖
      resolve(),
      // 将 CommonJS 模块转换为 ES 模块
      commonjs(),
      // 处理 TypeScript 文件
      typescript({
        tsconfig: './tsconfig.json', // 指定 TypeScript 配置文件
        declaration: true, // 生成声明文件（.d.ts）
        declarationDir: 'dist/types', // 声明文件的输出目录
      }),
    ],
  },
  // 第二个构建任务：处理 TypeScript 声明文件
  {
    // 指定声明文件的入口
    input: 'dist/types/index.d.ts',
    // 声明文件的输出配置
    output: [{ 
      file: 'dist/index.d.ts', // 输出到单个声明文件
      format: 'esm' // 使用 ES Module 格式
    }],
    // 使用 dts 插件处理声明文件
    plugins: [dts()],
  },
]; 