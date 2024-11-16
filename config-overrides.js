const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@core': path.resolve(__dirname, 'src/core'),
    '@interface': path.resolve(__dirname, 'src/interface'),
    '@screens': path.resolve(__dirname, 'src/screens'),
    '@styles': path.resolve(__dirname, 'src/styles'),
  };
  return config;
};
