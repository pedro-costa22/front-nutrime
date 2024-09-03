import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
      'unused-imports': unusedImports,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-children-prop': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
    extends: [
      'next',
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:react/jsx-runtime',
    ],
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
