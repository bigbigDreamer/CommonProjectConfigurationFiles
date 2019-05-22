## Vue进阶之`vue.config.js`配置

```javascript
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    //打包资源引用形式
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    //定义输出目录
    outputDir: 'dist',
    //定义静态资源目录
    assetsDir: 'public',
    //定义主入口
    indexPath: 'index.html',
    //是否允许文件名hash处理
    filenameHashing: true,
    //所有目录的主目录均设置index为入口
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    //是否允许单独提取CSS
    css: {
        modules: false,
        extract: false,
        //加载配置
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            },
        }
    },
    //定义webpack启动
    devServer: {
        //是否进行主机检查，一般这个在进行内网映射的时候设置
        disableHostCheck: true,
        //定义服务器启动端口
        port: 666, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        //定义热启动
        hot: true,
        //设置开发环境跨域
        //proxy: 'http://1278.0.0.1:8080/',
        /*{
      '/deviceCategory': {
              target: 'http://1278.0.0.1:8080/',
              changeOrigin: true,
              pathRewrite: {
                '^/deviceCategory': '/deviceCategory'
              }
            },
     '/device': {
         target: 'http://1278.0.0.1:8080/',
         changeOrigin: true,
         pathRewrite: {
             '^/device': '/device'
         }
     },
    '/message':{
     target: 'http://1278.0.0.1:8080/',
     changeOrigin: true,
     pathRewrite: {
       '^/message': '/message'
     }
    }
    }*/
    },
    //设置文件目录别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
    },
    productionSourceMap: false,

    //开启gzip压缩
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|.\css/, //匹配文件名
                        threshold: 10240,//对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    }),
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                drop_console: true,
                                drop_debugger: false,
                                pure_funcs: ['console.log']//移除console
                            }
                        },
                    })
                ]
            }
        }

    },

}

```