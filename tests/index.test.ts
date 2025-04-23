import toolkit from '../src';

describe('Index exports', () => {
  it('should export all utility functions', () => {
    expect(typeof toolkit.capitalize).toBe('function');
    expect(typeof toolkit.reverse).toBe('function');
    expect(typeof toolkit.chunk).toBe('function');
    expect(typeof toolkit.unique).toBe('function');
    expect(typeof toolkit.intersection).toBe('function');
    expect(typeof toolkit.union).toBe('function');
    expect(typeof toolkit.cleanObject).toBe('function');
  });

  it('should work correctly with each function', () => {
    expect(toolkit.capitalize('hello')).toBe('Hello');
    expect(toolkit.reverse('hello')).toBe('olleh');
    expect(toolkit.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(toolkit.unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(toolkit.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(toolkit.union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(toolkit.cleanObject({ name: 'toolkit', age: '' })).toEqual({
      name: 'toolkit',
    });
  });
});
