import { describe, expect, it } from 'vitest';

import { getPath } from '../../src/utils/get-path';

describe('utils/get-path', () => {
  it('returns undefined for missing package', () => {
    expect(
      getPath('@dylanarmstrong/this-package-does-not-exist'),
    ).toBeUndefined();
  });

  it('returns package if it exists', () => {
    expect(getPath('vitest')).toStrictEqual(expect.stringContaining('vitest'));
  });
});
