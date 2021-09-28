const path = require('path');
        const { VueLoaderPlugin } = require('vue-loader')

        module.exports = {
          mode: 'development',
          entry: {
SimpleMessageOptions: path.resolve(__dirname, 'src/simple-message/SimpleMessageOptions.vue'),
}
,
          output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: '[name].js',
            library: ['dynamicscreen.message2.slide.simple-message::0.2.0'],
            libraryTarget: 'window',
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
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
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
          },
        }
        