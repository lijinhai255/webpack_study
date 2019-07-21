
'use strict';

const path = require('path');
const webpack = require('webpack');
//单文件配置
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     mode: 'production'
// };

//多入口配置
module.exports = {
    entry:{
        app:"./src/app.js",
        search:"./src/search.js"
    },
    output:{
        filename:"[name].js",//占位符 [] name 打包后文件的名称 
        path:__dirname+"/dist"
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader'
            },
            {
                test:/.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }

            
        ]
    }
    Plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ]
}

//loaders 很重要
// babel-loader 转换ES6 ES7等js新特性语法
// css-loader 支持.css文件的加载和解析
// less-loader 将less文件转换成css
//ts-loader 将ts转换成js
//file-loader 将图片、字体等打包
//raw-loader 将文件以字符串形式导入
//three-loader 多进程打包js和css

//Plugins 很重要
//CommonsChunkPlugin 将chunk相同的模块代码提取成公共js
//CleanWebpackPlugin 清理构建目录
//ExtractTextWebpackPlugin 将css文件从bunlde文件里提取成一个独立的css文件
//CopyWebpackPlugin 将文件或者文件夹拷贝到构建的输出目录
//HtmlWebpackPlugin 创建html文件去承载输出的bundle
//UglifyjsWebpackPlugin 压缩js
//ZipWebpackPlugin 将打包出的资源生成一个zip包

//Mode
//Mode用来指定当前的构建的环境：production development 还是none
//设置mode可以使用webpack 内置的函数 默认值为 production
//Mode 的内置函数
//development 


//支持es6语法解析  npm i @babel/core @babel/preset-env babel-loader -D 
//创建 .babelrc 文件
// {
//     "presets": [
//         "@babel/preset-env"
//     ]
// }
// Reack jsx 语法


//解析css 
//css-loader 用于加载.css文件并且转换成commonjs对象
//style-loader 将样式通过<style> 标签插入到head中
// npm i style-loader css-loader -D


//解析less
// npm i less less-loader -D 

//对图片和字体资源进行解析 file-loader 文件  npm i file-loader || url-loader 


//webpack 中文件的监听
//  --watch
// webpack.config.js  watch命令
// -middleware 


//文件指纹
//Hash：和整个项目的构建相关 只要项目文件有修改 整个项目构建的hash值就会更改
// Chunkhash 和webpack打包的chunk有关 不同的entry会生成不同的chunkhash值
//Contenthash:根据文件内容来定义hash 文件内容不变 从contenthash不变
