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
