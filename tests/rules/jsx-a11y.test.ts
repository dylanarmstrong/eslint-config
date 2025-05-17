import { describe, expect, it, vi } from 'vitest';

describe('rules/jsx-a11y', () => {
  it('should return config and valid true when plugin is available', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('eslint-plugin-jsx-a11y', async () => ({
      default: {
        flatConfigs: {
          recommended: {
            rules: {
              'jsx-a11y/alt-text': 'error',
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/jsx-a11y');
    const results = module_.default;

    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty('jsx-a11y/alt-text');
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/jsx-a11y');
    const results = module_.default;

    expect(results.length).toBe(0);
  });
});
