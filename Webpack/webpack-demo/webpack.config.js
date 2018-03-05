/**
 * Created by mes on 2018/3/5.
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); //处理html文件引用js文件的插件
module.exports = {
    entry : './src/script/main.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'js/[name]-[chunkhash].js'
    },
    plugins : [
        new htmlWebpackPlugin({
            template : 'index.html', //以根目录下的index.html为模板
            inject : false,
            title : 'webpack is good bundle!',
            minify : { //压缩html
                collapseWhitespace : true, //删除文件空格
                removeComments : true   //删除注释代码
            }
        })
    ]
};