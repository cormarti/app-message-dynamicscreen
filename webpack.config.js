const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: "development",
  entry: {
    SimpleMessage: path.resolve(__dirname, './src/SimpleMessage.vue'),
    SimpleMessageOptions: path.resolve(__dirname, './src/SimpleMessageOptions.vue'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: "[name].js",
    library: ['DynamicScreenLibrary'],
    libraryTarget: "window",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': '@vue/runtime-dom',
      '@': 'src',
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'Vue',
  },
}
