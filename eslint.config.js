// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from '@typescript-eslint/eslint-plugin'; // Import the TypeScript ESLint plugin
import tsParser from '@typescript-eslint/parser'; // Import the TypeScript ESLint parser

export default [
    {
        ignores: ['dist'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tsParser, // Use the imported parser object
            parserOptions: {
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': tsEslint, // Use the imported TypeScript ESLint plugin
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // Existing rules
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            // Add the 'semi' rule
            'semi': ['error', 'always'],
            '@/semi': ['error', 'always'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
