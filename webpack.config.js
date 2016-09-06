const wepback = require('webpack')

module.exports = {
    entry: {
        home: './src/index'
    },
    output: {
        path: './dist',
        filename: '[name].html'
    },
    watch: true
}
