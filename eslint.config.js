import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ['.cache/**', '.storybook/**', '.cache/storybook/**'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // "semi": ["error", "always"]
    },
  },
];
