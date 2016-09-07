const wepback = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/main.js',
    output: {
       path: __dirname + '/src/js/',
       filename: "[name].bundle.js"
   },

   watch: true,

   module: {
       loaders: [
           {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
           {test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'},
           {test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
           {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
           {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
           {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
           {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
           {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
           {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
           {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
           {test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
           {test: /\.html$/, loader: 'raw'}
       ]
   }
}
