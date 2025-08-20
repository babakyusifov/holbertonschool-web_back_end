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
    // İstəsən buraya öz qaydalarını əlavə edə bilərsən
    'no-underscore-dangle': 'off',  // _ prefiksi üçün misal
  },
};

