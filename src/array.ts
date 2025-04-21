/**
 * 将数组分割成指定大小的块
 * @param array 要分割的数组
 * @param size 每个块的大小
 * @returns 分割后的二维数组
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size),
  );
};

/**
 * 移除数组中的重复元素
 * @param array 包含可能重复元素的数组
 * @returns 不含重复元素的新数组
 */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

/**
 * 计算多个数组的交集
 * @param arrays 需要计算交集的数组列表
 * @returns 包含所有数组共有元素的新数组
 * @example
 * ```ts
 * intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]); // [3]
 * intersection(['a', 'b', 'c'], ['b', 'c', 'd']); // ['b', 'c']
 * ```
 */
export const intersection = <T>(...arrays: T[][]): T[] => {
  if (!arrays || arrays.length === 0) return [];
  if (arrays.length === 1) return [...arrays[0]];

  // 使用第一个数组作为基准，过滤出在所有其他数组中都存在的元素
  return arrays[0].filter(item =>
    arrays.slice(1).every(array => array.includes(item)),
  );
};

/**
 * 计算多个数组的并集
 * @param arrays 需要计算并集的数组列表
 * @returns 包含所有数组中元素的新数组，不含重复元素
 * @example
 * ```ts
 * union([1, 2], [2, 3], [3, 4]); // [1, 2, 3, 4]
 * union(['a', 'b'], ['b', 'c'], ['c', 'd']); // ['a', 'b', 'c', 'd']
 * ```
 */
export const union = <T>(...arrays: T[][]): T[] => {
  if (!arrays || arrays.length === 0) return [];

  // 使用展开运算符将所有数组合并，然后使用 Set 去重
  return Array.from(new Set(arrays.flat()));
};
