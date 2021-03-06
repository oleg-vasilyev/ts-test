module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/main.ts',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    library: 'myApp'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  watch: true
};