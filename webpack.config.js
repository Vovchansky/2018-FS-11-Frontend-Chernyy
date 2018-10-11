module.exports = {
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: slack_front + '/src',
            }
        ],
    }
};