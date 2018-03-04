/**
 * Created by HappyEveryDay on 2018/3/4.
 */

//依赖a_util.js
define(['./a-util.js'], function(a_util){
    var a = {
        getDateFromA : function(flag){
            return a_util.getDateFromAutil(flag);
        }
    }
    return a;
});