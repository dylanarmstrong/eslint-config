import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('rules/import-x', () => {
  beforeEach(() => vi.resetModules());

  it('should return config and valid true when plugin is available', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('../../src/utils/has-typescript', async () => ({
      default: () => false,
    }));

    vi.doMock('eslint-plugin-import-x', async () => ({
      default: {
        flatConfigs: {
          recommended: {
            rules: {
              'import-x/no-nodejs-modules': 'off',
            },
          },
          typescript: {
            rules: {
              'import-x/no-dynamic-require': 'off',
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/import-x');
    const results = module_.default;

    expect(results.length).toBe(2);
    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty(
      'import-x/no-nodejs-modules',
    );
    expect(results[1].config.rules).toHaveProperty('import-x/order');
  });

  it('should return config with typescript and when plugin and typescript is available', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('../../src/utils/has-typescript', async () => ({
      default: () => true,
    }));

    vi.doMock('eslint-plugin-import-x', async () => ({
      default: {
        flatConfigs: {
          recommended: {
            rules: {
              'import-x/no-nodejs-modules': 'off',
            },
          },
          typescript: {
            rules: {
              'import-x/no-dynamic-require': 'off',
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/import-x');
    const results = module_.default;

    expect(results.length).toBe(3);
    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty(
      'import-x/no-nodejs-modules',
    );
    expect(results[1].config.rules).toHaveProperty(
      'import-x/no-dynamic-require',
    );
    expect(results[2].config.rules).toHaveProperty('import-x/order');
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/import-x');
    const results = module_.default;

    expect(results.length).toBe(0);
  });
});
