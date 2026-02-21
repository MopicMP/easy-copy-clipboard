const { clipboard, batch } = require('./index');

describe('easy-copy-clipboard', () => {
  test('should process string input', () => {
    expect(clipboard('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => clipboard(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = clipboard('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
