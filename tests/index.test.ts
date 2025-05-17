import { describe, expect, it } from 'vitest';

import config from '../src/index.js';

describe('src/index', () => {
  it('should export an array', () => {
    expect(Array.isArray(config)).toBe(true);
  });
});
