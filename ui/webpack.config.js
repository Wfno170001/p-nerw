var path = require('path');

module.exports = {
    entry: './src/js/entry.js',
    watch: true,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            //load css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //load images
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            //load fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            //load data
            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader',
            }
        ]
    }
};