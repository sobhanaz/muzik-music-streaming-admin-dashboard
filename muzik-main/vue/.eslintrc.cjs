module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "vue/first-attribute-linebreak": ["error", {
    //     "singleline": "ignore",
    //     "multiline": "beside"
    //   }]
  },
}
