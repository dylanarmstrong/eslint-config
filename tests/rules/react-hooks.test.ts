import { describe, expect, it, vi } from 'vitest';

describe('rules/react-hooks', () => {
  it('should return config and set valid to true when plugin is available', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('eslint-plugin-react-hooks', async () => ({
      default: {
        configs: {
          recommended: {
            rules: {
              'react-hooks/rules-of-hooks': 'error',
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/react-hooks');
    const results = module_.default;

    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty(
      'react-hooks/rules-of-hooks',
    );
    expect(results[0].config.plugins).toHaveProperty('react-hooks');
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/react-hooks');
    const results = module_.default;

    expect(results.length).toBe(0);
  });
});
