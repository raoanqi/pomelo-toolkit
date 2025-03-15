/**
 * 将字符串的第一个字符转换为大写
 * @param str 输入字符串
 * @returns 首字母大写的字符串
 */
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 反转字符串
 * @param str 输入字符串
 * @returns 反转后的字符串
 */
export const reverse = (str: string): string => {
  return str.split('').reverse().join('');
}; 