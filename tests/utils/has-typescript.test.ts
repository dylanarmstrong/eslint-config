import fs from 'node:fs';
import { describe, expect, it, vi } from 'vitest';

import hasTypescript from '../../src/utils/has-typescript';

describe('utils/has-typescript', () => {
  it('returns false when tsconfig.json is missing', () => {
    vi.spyOn(fs, 'accessSync').mockImplementationOnce(() => {
      throw new Error('I am not a file.');
    });
    expect(hasTypescript()).toBe(false);
  });

  it('returns false when tsconfig.json is missing', () => {
    vi.spyOn(fs, 'accessSync').mockImplementationOnce(() => 'I am a file.');
    expect(hasTypescript()).toBe(true);
  });
});
