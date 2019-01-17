const path = require("path");

module.exports = {
  devtool: "inline-source-map",

  entry: [path.resolve(__dirname, "src/index.js")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "static"),
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/react"]
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(jpg|png|ttf)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      }
    ]
  }
};
