module.exports = (api) => {
  /**
   * Cache the returned value forever and don't call this function again. This is the default behavior but since we
   * are reading the env value above, we need to explicitly set it after we are done doing that, else we get a
   * caching was left unconfigured error.
   */
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
      ["@babel/preset-env", { targets: { node: "current" } }],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true,
        },
      ],
    ],
  };
};
