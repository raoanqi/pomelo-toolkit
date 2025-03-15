/**
 * 将两个数字相加
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 两数之和
 */
export const add = (a: number, b: number): number => a + b;

/**
 * 从第一个数字中减去第二个数字
 * @param a 被减数
 * @param b 减数
 * @returns 差值
 */
export const subtract = (a: number, b: number): number => a - b;

/**
 * 将两个数字相乘
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 乘积
 */
export const multiply = (a: number, b: number): number => a * b;

/**
 * 将第一个数字除以第二个数字
 * @param a 被除数
 * @param b 除数
 * @returns 商
 * @throws 当除数为零时抛出错误
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}; 