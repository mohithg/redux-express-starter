var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  cache: true,
  resolve: {
    root: [path.resolve(__dirname, 'client'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx', '.coffee']
},
  entry: path.resolve(__dirname + '/client/main.js'),
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
      {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
    ]
  },
  plugins:[
    new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings: true
    //   }
    // })
  ]
};
