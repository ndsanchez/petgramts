const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle.js'
  }
}
