var webpack = require('webpack');  

module.exports = {  
  entry: [
    "./app/js/main.js"
  ],
  output: {
    path: __dirname + '/app/js',
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};