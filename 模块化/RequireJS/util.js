/**
 * Created by HappyEveryDay on 2018/3/4.
 */


//公共类库工具类
//依赖必须在前面就定义好，后面再调用
define([],function(){
   var util = {
       getDateFormat : function(flag){
                   if(flag == 1){
                       return '哈哈哈';
                   }else if(flag == 2){
                       return new Date().getFullYear();
                   }else {
                       var date = new Date();
                       return date.getFullYear() + date.getMonth() + date.getDate();
                   }
                 }
   };
   return util;
});
