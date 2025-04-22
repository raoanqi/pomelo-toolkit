module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 构建相关的修改
        'chore', // 构建过程或辅助工具的变动
        'ci', // CI 配置文件和脚本的修改
        'docs', // 文档更新
        'feat', // 新功能
        'fix', // 修复 bug
        'perf', // 性能优化
        'refactor', // 代码重构（不包括 bug 修复和功能新增）
        'revert', // 回滚之前的提交
        'style', // 代码格式修改（不影响代码运行的变动）
        'test', // 测试用例相关修改
      ],
    ],
    'type-case': [2, 'always', 'lowercase'], // 类型必须小写
    'type-empty': [2, 'never'], // 类型不能为空
    'subject-empty': [2, 'never'], // 主题不能为空
    'subject-full-stop': [2, 'never', '.'], // 主题不能以.结尾
    'subject-case': [0], // 主题格式，默认 'lower-case'
    'body-leading-blank': [1, 'always'], // 主体前需要空行
  },
};
