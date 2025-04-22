/**
 * 同时支持命名导出、默认导出
 */
// 导入字符串工具函数
import * as stringUtils from './string';
export const { capitalize, reverse } = stringUtils;

// 导入数组工具函数
import * as arrayUtils from './array';
export const { chunk, unique, intersection, union } = arrayUtils;

// 导入对象工具函数
import * as objectUtils from './object';
export const { cleanObject } = objectUtils;

// 默认导出所有工具函数
export default {
  ...stringUtils,
  ...arrayUtils,
  ...objectUtils,
};
