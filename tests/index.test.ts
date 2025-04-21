import pomelo from '../src';

describe('Default Export', () => {
  it('should export all utility functions', () => {
    expect(typeof pomelo.capitalize).toBe('function');
    expect(typeof pomelo.reverse).toBe('function');
    expect(typeof pomelo.chunk).toBe('function');
    expect(typeof pomelo.unique).toBe('function');
    expect(typeof pomelo.intersection).toBe('function');
    expect(typeof pomelo.union).toBe('function');
  });

  it('should correctly execute the exported functions', () => {
    expect(pomelo.capitalize('hello')).toBe('Hello');
    expect(pomelo.reverse('hello')).toBe('olleh');
    expect(pomelo.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(pomelo.unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(pomelo.intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(pomelo.union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});
