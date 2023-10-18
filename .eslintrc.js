module.exports = {
  plugins: [
    // ...
    'react-hooks',
    'react',
  ],

  parser: '@typescript-eslint/parser',

  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-debugger': 'error',
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  extends: ['plugin:storybook/recommended'],
};
