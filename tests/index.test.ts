import pomelo from '../src';

describe('Default Export', () => {
  it('should export all utility functions', () => {
    expect(typeof pomelo.add).toBe('function');
    expect(typeof pomelo.subtract).toBe('function');
    expect(typeof pomelo.multiply).toBe('function');
    expect(typeof pomelo.divide).toBe('function');
    expect(typeof pomelo.capitalize).toBe('function');
    expect(typeof pomelo.reverse).toBe('function');
    expect(typeof pomelo.chunk).toBe('function');
    expect(typeof pomelo.unique).toBe('function');
  });

  it('should correctly execute the exported functions', () => {
    expect(pomelo.add(1, 2)).toBe(3);
    expect(pomelo.subtract(5, 2)).toBe(3);
    expect(pomelo.multiply(3, 4)).toBe(12);
    expect(pomelo.divide(10, 2)).toBe(5);
    expect(pomelo.capitalize('hello')).toBe('Hello');
    expect(pomelo.reverse('hello')).toBe('olleh');
    expect(pomelo.chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(pomelo.unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});
