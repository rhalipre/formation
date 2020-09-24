module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single'],
    indent: ['error', 2, { 'SwitchCase': 1 }],
  },
}
