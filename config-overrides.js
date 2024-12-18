const { override, addPostcssPlugins } = require('customize-cra');
const webpack = require("webpack");

module.exports = override(
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer')
  ]),
  (config) => {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify"),
      path: require.resolve("path-browserify"),
      url: require.resolve("url"),
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ]);
    config.ignoreWarnings = [/Failed to parse source map/];
    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      enforce: "pre",
      loader: require.resolve("source-map-loader"),
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  }
);
