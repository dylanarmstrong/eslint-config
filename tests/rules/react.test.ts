import { describe, expect, it, vi } from 'vitest';

describe('rules/react', () => {
  it('should include jsx-runtime config and version settings if react >= 17 is present', async () => {
    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('../../src/utils/get-path', async () => ({
      getPath: () => 'react',
    }));

    vi.doMock('react', async () => ({
      version: '18.2.0',
    }));

    vi.doMock('eslint-plugin-react', async () => ({
      default: {
        configs: {
          flat: {
            'jsx-runtime': {
              rules: {
                'react/react-in-jsx-scope': 'off',
              },
            },
            recommended: {
              rules: {
                'react/display-name': 'warn',
              },
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/react');
    const results = module_.default;

    expect(results.length).toBe(3);
    const [recommended, jsxRuntime, settings] = results;
    expect(recommended.config.rules).toHaveProperty('react/display-name');
    expect(jsxRuntime.config.rules).toHaveProperty('react/react-in-jsx-scope');
    expect(settings.config.settings?.react?.version).toBe('18.2.0');
  });

  it('should return no configs when plugin is not available', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => false,
    }));

    vi.doMock('../../src/utils/get-path', async () => ({
      getPath: () => {},
    }));

    const module_ = await import('../../src/rules/react');
    const results = module_.default;

    expect(results.length).toBe(0);
  });

  it('should default version to "detect" if React has no version field', async () => {
    vi.resetModules();

    vi.doMock('../../src/utils/requires', async () => ({
      default: () => true,
    }));

    vi.doMock('../../src/utils/get-path', async () => ({
      getPath: () => 'react',
    }));

    vi.doMock('react', async () => ({}));

    vi.doMock('eslint-plugin-react', async () => ({
      default: {
        configs: {
          flat: {
            recommended: {
              rules: {
                'react/display-name': 'warn',
              },
            },
          },
        },
      },
    }));

    const module_ = await import('../../src/rules/react');
    const results = module_.default;

    expect(
      results.some(
        (result) => result?.config?.settings?.react?.version === 'detect',
      ),
    );
  });
});
