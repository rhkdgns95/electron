const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "none",
  mode: "development",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        include: /src/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /mode_modules|dist/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/renderer"),
    historyApiFallback: true,
    compress: true,
    port: 4000,
    hot: true,
    publicPath: "/",
  },
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "dist"),
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
