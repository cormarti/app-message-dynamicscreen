module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: "artifact.js",
    library: "[name]",
    libraryTarget: "window",
  },
  entry: path.resolve(__dirname, './src/SimpleMessageOptions.vue')
}
