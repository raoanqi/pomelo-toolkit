# 贡献指南

pomelo-toolkit 欢迎一切对本项目有兴趣的人员，下面是关于如何贡献的指南，帮助你参与到项目中来。

## 开发流程

1. Fork 这个仓库
2. 克隆你 fork 的仓库到本地
   ```bash
   git clone https://github.com/raoanqi/pomelo-toolkit.git
   cd pomelo-toolkit
   ```
3. 安装依赖
   ```bash
   pnpm install
   ```
4. 创建一个新分支
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. 进行修改
6. 确保测试通过
   ```bash
   pnpm test
   ```
7. 提交你的更改
   ```bash
   git commit -m "feat: add some feature"
   ```
8. 推送到你的 fork
   ```bash
   git push origin feature/your-feature-name
   ```
9. 创建一个 Pull Request

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范来格式化提交信息。

提交信息的格式如下：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

类型可以是：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更改
- `style`: 不影响代码含义的更改（空格、格式化、缺少分号等）
- `refactor`: 既不修复 bug 也不添加功能的代码更改
- `perf`: 提高性能的代码更改
- `test`: 添加或修正测试
- `chore`: 对构建过程或辅助工具和库的更改

## 添加新的工具函数

如果你想添加新的工具函数，请遵循以下步骤：

1. 在 `src` 目录中添加你的函数
2. 确保导出你的函数（命名导出和默认导出）
3. 在 `tests` 目录中为你的函数添加测试
4. 更新 README.md 中的文档

## 代码风格

我们使用 ESLint 和 TypeScript 来保持代码风格的一致性。在提交之前，请确保你的代码通过了 lint 检查：

```bash
pnpm lint
```

## 测试

所有的新功能和 bug 修复都应该包含测试。我们使用 Jest 作为测试框架：

```bash
pnpm test
```

## 发布流程

只有项目维护者才能发布新版本。发布流程如下：

1. 更新 package.json 中的版本号
2. 运行 `pnpm build` 构建项目
3. 运行 `pnpm test` 确保所有测试通过
4. 运行 `pnpm publish --access public` 发布到 npm

## 许可证

通过贡献你的代码，你同意你的贡献将在 MIT 许可证下发布。 