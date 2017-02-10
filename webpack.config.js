module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            }
        ],
        postLoaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['es3ify-loader'],
            },
        ],
    },
};