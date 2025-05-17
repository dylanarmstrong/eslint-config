import { describe, expect, it, vi } from 'vitest';

describe('rules/typescript', () => {
  it('should return typescript config when typescript is available and tsconfig exists', async () => {
    vi.doMock('../../src/utils/has-typescript', async () => ({
      default: () => true,
    }));

    vi.doMock('typescript-eslint', async () => ({
      config: (options: Record<string, unknown>) => [
        {
          rules: {
            '@typescript-eslint/no-unused-vars': 'error',
          },
          ...options,
        },
      ],
      configs: {
        recommended: [],
      },
    }));

    const module_ = await import('../../src/rules/typescript');
    const results = module_.default;

    expect(results[0].valid).toBe(true);
    expect(results[0].config.rules).toHaveProperty(
      '@typescript-eslint/no-unused-vars',
    );
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/has-typescript', async () => ({
      default: () => false,
    }));

    const module_ = await import('../../src/rules/typescript');
    const results = module_.default;

    expect(results.length).toBe(0);
  });
});
