module.exports = {
  env: {
    browser: true
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
