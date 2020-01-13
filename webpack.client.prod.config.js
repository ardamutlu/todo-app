'use strict';

const { resolve } = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const PwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].[id].bundle.js'
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new ManifestPlugin(),
    // https://developer.mozilla.org/en-US/docs/Web/Manifest
    new PwaManifest({
      filename: 'manifest.webmanifest',
      name: 'to-do',
      short_name: 'to-do',
      theme_color: '#3498db',
      description: 'introducing SPA and SSR',
      background_color: '#f5f5f5',
      crossorigin: 'use-credentials'
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      include: [/\.js$/],
      runtimeCaching: [
        {
          urlPattern: new RegExp('.'), // for start_url
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: new RegExp('https://fonts.googleapis.com|https://fonts.gstatic.com'),
          handler: 'CacheFirst'
        }
      ]
    }),
    new RobotstxtPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimize: true,
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};

module.exports = config;
