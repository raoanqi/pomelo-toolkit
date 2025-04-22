# Pomelo Toolkit

一个使用 TypeScript 开发的工具函数库，支持全量导入和按需导入。

## 要求

- Node.js >= 18.0.0

## 安装

```bash
pnpm add pomelo-toolkit
```

## 使用

### 全量导入

```typescript
import pomelo from 'pomelo-toolkit';

// 使用工具函数
pomelo.capitalize('hello');
pomelo.unique([1, 1, 2, 3]);
pomelo.cleanObject({ name: 'pomelo', age: '' }); // { name: 'pomelo' }
```

### 按需导入

```typescript
import { capitalize, unique, cleanObject } from 'pomelo-toolkit';

// 使用工具函数
capitalize('hello');
unique([1, 1, 2, 3]);
cleanObject({ name: 'pomelo', age: '' }); // { name: 'pomelo' }
```

### 浏览器直接使用

```html
<script src="https://unpkg.com/pomelo-toolkit/dist/index.umd.js"></script>
<script>
  // 通过全局变量 pomeloToolkit 使用
  const result = pomeloToolkit.capitalize('hello');
  console.log(result); // 'Hello'
</script>
```

## 输出格式

- **CommonJS**: `dist/index.js` - 适用于 Node.js 环境
- **ES Module**: `dist/index.esm.js` - 适用于支持 ES 模块的现代环境
- **UMD**: `dist/index.umd.js` - 通用格式，适用于浏览器及 AMD/CommonJS 环境

## 可用的工具函数

### 字符串处理

- `capitalize(str: string): string` - 将字符串的第一个字符转换为大写
- `reverse(str: string): string` - 反转字符串

### 数组处理

- `chunk<T>(array: T[], size: number): T[][]` - 将数组分割成指定大小的块
- `unique<T>(array: T[]): T[]` - 移除数组中的重复元素
- `intersection<T>(...arrays: T[][]): T[]` - 计算多个数组的交集
- `union<T>(...arrays: T[][]): T[]` - 计算多个数组的并集

### 对象处理

- `cleanObject<T>(obj: T): Partial<T>` - 清理对象中的空值（空字符串、null、undefined）

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 生产环境构建（不生成 sourcemap）
pnpm build:prod

# 运行测试
pnpm test

# 代码检查
pnpm lint
```

## 贡献

欢迎贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解如何参与到项目中来。

## License

MIT
