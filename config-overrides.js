/* config-overrides.js */

module.exports = function override(config, env) {
  // Configure Sass loader to silence deprecation warnings
  const oneOfRule = config.module.rules.find(rule => rule.oneOf);
  
  if (oneOfRule) {
    oneOfRule.oneOf.forEach(rule => {
      if (rule.test && rule.test.toString().includes('scss|sass')) {
        if (rule.use && Array.isArray(rule.use)) {
          rule.use.forEach(loader => {
            if (loader.loader && loader.loader.includes('sass-loader')) {
              if (!loader.options) {
                loader.options = {};
              }
              if (!loader.options.sassOptions) {
                loader.options.sassOptions = {};
              }
              loader.options.sassOptions.silenceDeprecations = ['legacy-js-api'];
            }
          });
        }
      }
    });
  }

  return config;
}