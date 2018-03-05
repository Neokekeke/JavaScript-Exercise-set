/**
 * Created by mes on 2018/3/5.
 */

//promise同步的异步，then()函数会返回一个promise对象，然后再在给个then的执行模块中引用
//promise函数接受一个函数作为参数，函数有两个参数，两个参数也是函数
//then接受两个函数作为参数，fulfilled和rejected

//console.log("promise开始执行"); //1
//new Promise((resolve , reject)=>{
//        setTimeout(()=>{
//            console.log("内部的计时器"); //7
//        },0);
//        resolve(100);
//        console.log("promise执行中"); //2
//    })
//    .then(value => {
//        console.log("第一个then");  //上面resolve的值 4
//    },error => {
//        console.log(error);
//    })
//    .then(value => {
//        console.log("第二个then"); //5
//    });
//
//setTimeout(()=>{
//    console.log("外部计时器"); //6
//},0);
//
//console.log(200); //3

var promise = new Promise((resolve , reject)=>{
        resolve(200);
    })
    .then((value) => {
        console.log("第一个then",value);
        (function(){
            return new Promise((resolve , reject)=>{
                resolve(300);
            });
        })();
    },(error) => {
        console.log("出错了");
    }).then(value => {
        console.log("第二个then",value);
    });
