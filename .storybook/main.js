const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    './**/*.stories.@(js|mdx)',
    '../src/**/*.stories.@(js|jsx|mdx)',
  ]
}
