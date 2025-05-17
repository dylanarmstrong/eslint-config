import { describe, expect, it, vi } from 'vitest';

describe('rules/builtin', () => {
  it('should return config and rules when @eslint/js is available', async () => {
    vi.doMock('@eslint/js', async () => ({
      default: {
        configs: {
          recommended: {
            rules: {
              'no-console': 'warn',
            },
          },
        },
      },
    }));

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    const module_ = await import('../../src/rules/builtin');
    const results = module_.default;

    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(2);
    expect(results[1].config).toHaveProperty('rules');
    expect(results[1].config.rules).toHaveProperty('no-console');
  });

  it('should return only rules when @eslint/js is missing', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/builtin');
    const results = module_.default;

    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(1);
    expect(results[0].config).toHaveProperty('rules');
    expect(results[0].config.rules).toHaveProperty('no-console');
  });
});
