const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    //模式有开发模式，生产模式，none
    //mode: 'production',
    mode: 'development',
    entry: './src/index.js',
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname,"./dist/"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js", // string
        // 「入口分块(entry chunk)」的文件名模板
        publicPath: "/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
        //library: "MyLibrary", // string,
        // 导出库(exported library)的名称
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                use: [
                    'raw-loader'
                ]
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    //stats: { children: false },
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://localhost:3000'
        // },
        port: 667,
        contentBase: path.resolve(__dirname,"./dist"),
        inline: true,
        //watchContentBase: true,
        // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // https: false, // true for self-signed, object for cert authority
        ///noInfo: true, // only errors & warns on hot reload
        // ...
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: './index.html',
        }
    ),
        new webpack.HotModuleReplacementPlugin()
    ],
};