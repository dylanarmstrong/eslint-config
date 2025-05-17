import { beforeEach, describe, expect, it, vi } from 'vitest';

import * as getPathModule from '../../src/utils/get-path';
import requires from '../../src/utils/requires';

describe('utils/requires', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('returns true when all packages are resolvable', () => {
    vi.spyOn(getPathModule, 'getPath').mockReturnValue('/path/to/module');

    const result = requires('test-plugin', ['some-module']);
    expect(result).toBe(true);
  });

  it('returns false when any package is not resolvable and logs warning', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(getPathModule, 'getPath').mockImplementation(
      (): undefined => undefined,
    );

    const result = requires('missing-plugin', ['missing-module']);
    expect(result).toBe(false);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('Disabling'));
  });

  it('returns false and does not log when quiet is true', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(getPathModule, 'getPath').mockImplementation(
      (): undefined => undefined,
    );

    const result = requires('quiet-plugin', ['missing-module'], true);
    expect(result).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });
});
