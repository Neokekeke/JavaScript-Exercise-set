/**
 * Created by HappyEveryDay on 2018/3/4.
 */


//依赖于util.js
define(['./util.js'] , function(util){
    var a_util = {
        getDateFromAutil  : function(flag){
            return util.getDateFormat(flag);
        }
    };
    return a_util;
});