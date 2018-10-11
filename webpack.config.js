module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: /slack_front/ + '/src',
            }
        ],
    }
};