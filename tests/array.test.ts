import { chunk, unique, intersection, union } from '../src';

describe('Array Utils', () => {
  describe('chunk', () => {
    it('should split array into chunks of specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });

    it('should handle chunk size larger than array length', () => {
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    it('should handle chunk size equal to array length', () => {
      expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });

    it('should handle chunk size of 1', () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    it('should work with arrays of different types', () => {
      expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });
  });

  describe('unique', () => {
    it('should remove duplicates from array', () => {
      expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty array', () => {
      expect(unique([])).toEqual([]);
    });

    it('should handle array with no duplicates', () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle array with all duplicates', () => {
      expect(unique([1, 1, 1])).toEqual([1]);
    });

    it('should work with arrays of different types', () => {
      expect(unique(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    });

    it('should preserve the order of first occurrence', () => {
      expect(unique([3, 1, 2, 3, 2, 1])).toEqual([3, 1, 2]);
    });
  });

  describe('intersection', () => {
    it('should return elements common to all arrays', () => {
      expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3]);
    });

    it('should handle empty array as input', () => {
      expect(intersection([])).toEqual([]);
    });

    it('should handle no arrays as input', () => {
      expect(intersection()).toEqual([]);
    });

    it('should handle a single array', () => {
      expect(intersection([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle multiple arrays with no common elements', () => {
      expect(intersection([1, 2], [3, 4], [5, 6])).toEqual([]);
    });

    it('should handle arrays with identical elements', () => {
      expect(intersection([1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should work with arrays of strings', () => {
      expect(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual([
        'b',
        'c',
      ]);
    });
  });

  describe('union', () => {
    it('should return all unique elements from all arrays', () => {
      expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle empty array as input', () => {
      expect(union([])).toEqual([]);
    });

    it('should handle no arrays as input', () => {
      expect(union()).toEqual([]);
    });

    it('should handle a single array', () => {
      expect(union([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle multiple arrays with no common elements', () => {
      expect(union([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle arrays with identical elements', () => {
      expect(union([1, 2, 3], [1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should work with arrays of strings', () => {
      expect(union(['a', 'b'], ['b', 'c'], ['c', 'd'])).toEqual([
        'a',
        'b',
        'c',
        'd',
      ]);
    });
  });
});
