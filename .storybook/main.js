module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      // Required because of: https://github.com/chakra-ui/chakra-ui/issues/2527
      "@emotion/core": "@emotion/react",
      "emotion-theming": "@emotion/react",
    }

    return config;
  },
}