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
    // Jest qaydası deaktiv edilir:
    'jest/no-large-snapshots': 'off',

    // İstəyə görə, başqa qaydalar da əlavə edə bilərsən:
    'no-underscore-dangle': 'off',
  },
};
