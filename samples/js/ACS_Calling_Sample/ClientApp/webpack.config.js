const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => ({
  devtool: process.env.NODE_ENV == 'production' ? 'none' : 'source-map',
  entry: './src/index.js',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    compress: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]spool-sdk[\\/]/,
          name: 'AzureCommunicationCallingSDK',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [path.resolve(__dirname, './node_modules')],
        options: {
          configFile: 'tsconfig.json'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({ 'process.env.buildDate': JSON.stringify(new Date().toString()) }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: env ? env.perf : false, // use --env.perf=true in the webpack config to enable the stats.json generation
      statsOptions: { source: false }
    }),
    new CompressionPlugin()
  ]
});
