const path = require('path');

//webpack是nodejs程序，所以这里是nodejs语法：
module.exports = {
    entry: "./www/app/main.js",                         //程序主入口
    output: {                                       //程序的编译出的文件
        path: path.resolve(__dirname, "www/dist"),      //文件夹名字
        filename: "bundle.js",                      //文件名字
    },
    module: {                                       //挂载的一些模块
        rules: [
            {
                test: /\.jsx?$/,                      //所有以js结尾的
                loader: "babel-loader",             //请使用babel-loader的加载器
                include: [
                    path.resolve(__dirname, "www/app")
                ],
                options: {
                    presets: ["es2015","react"],
                    plugins : ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, 
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    watch : true
}