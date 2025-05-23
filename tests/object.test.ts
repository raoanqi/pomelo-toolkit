import { cleanObject } from '../src';

describe('Object Utils', () => {
  describe('cleanObject', () => {
    it('should remove empty string, null, and undefined values from object', () => {
      const input = {
        name: 'toolkit',
        age: '',
        gender: null,
        address: undefined,
        isActive: false,
        count: 0,
      };

      const expected = {
        name: 'toolkit',
        isActive: false,
        count: 0,
      };

      expect(cleanObject(input)).toEqual(expected);
    });

    it('should return the original object if not an object', () => {
      // @ts-expect-error: Testing invalid input
      expect(cleanObject(null)).toBeNull();
      // @ts-expect-error: Testing invalid input
      expect(cleanObject(undefined)).toBeUndefined();
      // @ts-expect-error: Testing invalid input
      expect(cleanObject('string')).toBe('string');
      // @ts-expect-error: Testing invalid input
      expect(cleanObject(123)).toBe(123);
    });

    it('should not modify the original object', () => {
      const input = { name: 'toolkit', age: '' };
      const result = cleanObject(input);

      expect(result).toEqual({ name: 'toolkit' });
      expect(input).toEqual({ name: 'toolkit', age: '' });
      expect(result).not.toBe(input); // Should be a new object
    });

    it('should handle arrays as input', () => {
      const input = [1, 2, 3];
      // @ts-expect-error: Testing invalid input
      expect(cleanObject(input)).toEqual(input);
    });

    it('should handle empty objects', () => {
      expect(cleanObject({})).toEqual({});
    });

    it('should handle nested objects but not clean them', () => {
      const input = {
        name: 'toolkit',
        info: {
          age: '',
          gender: null,
        },
      };

      const expected = {
        name: 'toolkit',
        info: {
          age: '',
          gender: null,
        },
      };

      expect(cleanObject(input)).toEqual(expected);
    });

    it('should return a new object without modifying the original', () => {
      const input = { name: 'toolkit', age: '' };
      const result = cleanObject(input);

      expect(result).toEqual({ name: 'toolkit' });
      expect(input).toEqual({ name: 'toolkit', age: '' });
    });
  });
});
