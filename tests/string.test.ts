import { capitalize, reverse } from '../src';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should return an already capitalized string as is', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character string', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should handle string with numbers and special characters', () => {
      expect(capitalize('123abc')).toBe('123abc');
    });
  });

  describe('reverse', () => {
    it('should reverse a string correctly', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    it('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });

    it('should handle palindrome', () => {
      expect(reverse('radar')).toBe('radar');
    });

    it('should handle string with spaces', () => {
      expect(reverse('hello world')).toBe('dlrow olleh');
    });

    it('should handle string with numbers and special characters', () => {
      expect(reverse('abc123!@#')).toBe('#@!321cba');
    });
  });
}); 