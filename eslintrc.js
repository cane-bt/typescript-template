// https://typescriptbook.jp/tutorials/eslint#eslint%E3%81%A7typescript%E3%82%92%E3%83%AA%E3%83%B3%E3%83%88%E3%81%97%E3%82%88%E3%81%86
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist'],
  // TODO: エラーが治らないなら以下を確認
  // https://zenn.dev/yamaden/articles/cfe595439be4cb#%E9%80%A3%E6%90%BA%E8%A8%AD%E5%AE%9A
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/quotes': ['error', 'double'],
  },
};
