import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintCongigPrettier from 'eslint-config-prettier';

export default tseslint.config({
  files: ['**/*.tsx', '**/*.ts'],
  extends:[
    eslintCongigPrettier
  ],
  plugins:{
    '@typescript-eslint': tseslint.plugin,
    'prettier': eslintPluginPrettier
  },
  languageOptions:{
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
  },
});