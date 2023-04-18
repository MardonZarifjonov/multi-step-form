module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    // 'eslint-config-prettier',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    // 'unused-imports',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': ['off'],
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn'],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-underscore-dangle': ['off'],
    // indent: ['error', 4],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
        ignoreImports: true,
      },
    ],
    // 'unused-imports/no-unused-imports': 'error',
    // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   {
    //     vars: 'all',
    //     varsIgnorePattern: '^_',
    //     args: 'after-used',
    //     argsIgnorePattern: '^_',
    //   },
    // ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/comma-dangle': 'off',

    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/quotes': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/button-has-type': 'off',
    'import/extensions': 'off',
    'import/namespace': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
};
