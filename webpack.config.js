var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/src/common/Entry.jsx",
  devServer: {
      historyApiFallback: true
  },  
  output: {
    path: path.join(__dirname, 'frontend/static'),
    publicPath: "./frontend/static",    
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '../[resource-path]'    
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {include: /\.json$/, loaders: ["json-loader"]}
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },  
  devtool: 'inline-source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: []
};
