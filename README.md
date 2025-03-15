# Pomelo Toolkit

一个使用 TypeScript 开发的工具函数库，支持全量导入和按需导入。

## 安装

```bash
pnpm add pomelo-toolkit
```

## 使用

### 全量导入

```typescript
import pomelo from 'pomelo-toolkit';

// 使用工具函数
pomelo.add(1, 2);
pomelo.capitalize('hello');
```

### 按需导入

```typescript
import { add, capitalize } from 'pomelo-toolkit';

// 使用工具函数
add(1, 2);
capitalize('hello');
```

## 可用的工具函数

### 数学运算
- `add(a: number, b: number): number`
- `subtract(a: number, b: number): number`
- `multiply(a: number, b: number): number`
- `divide(a: number, b: number): number`

### 字符串处理
- `capitalize(str: string): string`
- `reverse(str: string): string`

### 数组处理
- `chunk<T>(array: T[], size: number): T[][]`
- `unique<T>(array: T[]): T[]`

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint
```

## 贡献

欢迎贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解如何参与到项目中来。

## License

MIT 