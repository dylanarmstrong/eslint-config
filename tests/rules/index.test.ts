import { describe, expect, it, vi } from 'vitest';

describe('rules/index', () => {
  it('should export array of rule modules', async () => {
    const rulesIndex = await import('../../src/rules/index');
    expect(Array.isArray(rulesIndex.default)).toBe(true);
  });

  it('should ignore plugins that return no valid config', async () => {
    vi.resetModules();

    vi.doMock('../../src/rules/jsx-a11y', () => ({
      default: [{ config: undefined, valid: false }],
    }));
    vi.doMock('../../src/rules/builtin', async () => ({
      default: [{ config: { rules: { 'no-console': 'warn' } }, valid: true }],
    }));
    vi.doMock('../../src/rules/typescript', () => ({ default: [] }));
    vi.doMock('../../src/rules/react', () => ({ default: [] }));
    vi.doMock('../../src/rules/react-hooks', () => ({ default: [] }));
    vi.doMock('../../src/rules/unicorn', () => ({ default: [] }));
    vi.doMock('../../src/rules/prettier', () => ({ default: [] }));

    const rulesIndex = await import('../../src/rules/index');
    const result = rulesIndex.default;

    expect(result).toEqual([{ rules: { 'no-console': 'warn' } }, {}]);
  });
});
