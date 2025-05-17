import { describe, expect, it, vi } from 'vitest';

describe('rules/prettier', () => {
  it('should return config and valid true when plugin is available', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('eslint-config-prettier', async () => ({
      default: {
        rules: {
          indent: 'off',
        },
      },
    }));

    const module_ = await import('../../src/rules/prettier');
    const results = module_.default;

    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty('indent');
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/prettier');
    const results = module_.default;

    expect(results.length).toBe(0);
  });
});
