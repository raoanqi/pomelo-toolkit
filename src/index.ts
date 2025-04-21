// 导入字符串工具函数
import * as stringUtils from './string';
export const { capitalize, reverse } = stringUtils;

// 导入数组工具函数
import * as arrayUtils from './array';
export const { chunk, unique, intersection, union } = arrayUtils;

// 默认导出所有工具函数
export default {
  ...stringUtils,
  ...arrayUtils,
};
