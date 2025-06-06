import { describe, expect, it, vi } from 'vitest';

describe('rules/unicorn', () => {
  it('should return modified unicorn config when plugin is available', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('eslint-plugin-unicorn', async () => ({
      default: {
        configs: {
          recommended: {
            rules: {
              'unicorn/filename-case': 'error',
              'unicorn/prevent-abbreviations': 'warn',
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/unicorn');
    const results = module_.default;

    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty(
      'unicorn/prevent-abbreviations',
    );

    // My override for vite
    expect(results[1].config.rules).toHaveProperty(
      'unicorn/prevent-abbreviations',
    );
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/unicorn');
    const results = module_.default;

    expect(results.length).toBe(0);
  });
});
