const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.module\.scss$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[local]__[hash:base64:5]",
          },
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  })
);
