
var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:['react']
          }

      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}
