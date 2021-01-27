module.exports = {
  // root: true,
  // env: {
  //   node: true,
  // },
  extends: 'airbnb',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off',
    'max-len': ['warn', { code: 175 }],
  },
};
