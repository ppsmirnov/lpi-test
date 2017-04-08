module.exports = () => ({
  plugins: {
    'postcss-mixins': {},
    'postcss-import': {},
    'postcss-url': { url: 'inline' },
    'postcss-cssnext': {
      browsers: ['last 2 versions'],
    },
    'postcss-reporter': { clearMessages: true },
  },
});
