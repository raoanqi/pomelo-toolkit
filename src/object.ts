/**
 * 清理对象中的空值，包括空字符串('')、null 和 undefined
 * @param obj 要清理的对象
 * @returns 清理后的新对象，原对象不会被修改
 * @example
 * ```ts
 * cleanObject({ name: 'pomelo', age: '', gender: null, address: undefined });
 * // 返回 { name: 'pomelo' }
 * ```
 */
export const cleanObject = <T extends Record<string, unknown>>(
  obj: T,
): Partial<T> => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  const result = {} as Partial<T>;

  Object.keys(obj).forEach(key => {
    const k = key as keyof T;
    const value = obj[k];
    const isEmptyValue = value === '' || value === null || value === undefined;

    if (!isEmptyValue) {
      result[k] = value;
    }
  });

  return result;
};
