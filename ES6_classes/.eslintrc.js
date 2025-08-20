module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Jest pluginindən qaynaqlanan xətanı aradan qaldırmaq üçün bu qaydanı deaktiv et
    'jest/no-large-snapshots': 'off',
    // _ prefix-lərdən ESLint qınamasın deyə
    'no-underscore-dangle': 'off',
  },
};
