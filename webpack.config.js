const path = require('path');
        const { VueLoaderPlugin } = require('vue-loader')

        module.exports = {
          mode: 'development',
          entry: {
    SimpleMessage: path.resolve(__dirname, 'src/simple-message/slide/Module.ts'),
    SimpleMessageOptions: path.resolve(__dirname, 'src/simple-message/SimpleMessageOptions.vue'),
    // AdvancedMessage: path.resolve(__dirname, 'src/advanced-message/slide/Module.ts'),
    // AdvancedMessageOptions: path.resolve(__dirname, 'src/advanced-message/AdvancedMessageOptions.vue'),
  },
          output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: '[name].js',
            library: ['DynamicScreenLibrary'],
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
              '@': 'src',
            }
          },
          plugins: [
            new VueLoaderPlugin()
          ],
          externals: {
          },
        }
