import { add, subtract, multiply, divide } from '../src';

describe('Math Utils', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('should add a positive and a negative number correctly', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should add two negative numbers correctly', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it('should add zero correctly', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 2)).toBe(3);
    });

    it('should subtract a negative number from a positive number correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it('should subtract a positive number from a negative number correctly', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    it('should subtract zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should multiply a positive and a negative number correctly', () => {
      expect(multiply(3, -4)).toBe(-12);
    });

    it('should multiply two negative numbers correctly', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    it('should multiply by zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should divide a positive number by a negative number correctly', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    it('should divide a negative number by a positive number correctly', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });
}); 