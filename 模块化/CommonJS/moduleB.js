/**
 * Created by HappyEveryDay on 2018/3/4.
 */



//  命令行中用node moduleB.js直接运行这个js文件
var moduleB = {

    sayB : function(){
        console.log('这是moduleB的模块');
    },
    //懒引入，需要在require
    fetch : require('./moduleA')

};

    moduleB.fetch.sayA();

module.exports = moduleB;