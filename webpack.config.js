const wepback = require('webpack')

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
           {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
           {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'},
           {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
           {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
           {test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
           {test: /\.html$/, loader: 'raw'},
           {test: /\.json$/, loader: 'json-loader'},
           {test: /\.handlebars$/, loader: 'handlebars-loader', exclude: /(node_modules|bower_components)/}
       ]
   }
}
