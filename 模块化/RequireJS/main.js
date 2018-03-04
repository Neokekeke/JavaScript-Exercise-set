/**
 * Created by HappyEveryDay on 2018/3/4.
 */


// 引用a.js
// 这里是入口文件，引用需要用到的js文件不需要就不加载
require(['./a.js'], function(a){
    var main = a.getDateFromA(2);
    console.log(main);
});
