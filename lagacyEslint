module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // 자동으로 사용중인 React 버전 감지
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // TypeScript 파일 대상
    },
  ],
};
