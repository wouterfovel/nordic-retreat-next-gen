module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript',
    '@vue/airbnb-with-typescript',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    "no-console": ["error"],
    "id-length":["error", { "min": 3 }],
    "no-unused-vars": 1,
    "prefer-const": 1,
    "no-var": 1,
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "singleQuote": true,
        "semi": true,
        "trailingComma": "es5",
        "tabWidth": 2,
        "arrowParens": "avoid"
      }
    ]
  },
}
