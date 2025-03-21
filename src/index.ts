// 导入数学工具函数
import * as mathUtils from './math';
export const { add, subtract, multiply, divide } = mathUtils;

// 导入字符串工具函数
import * as stringUtils from './string';
export const { capitalize, reverse } = stringUtils;

// 导入数组工具函数
import * as arrayUtils from './array';
export const { chunk, unique } = arrayUtils;

// 默认导出所有工具函数
export default {
  ...mathUtils,
  ...stringUtils,
  ...arrayUtils,
};
