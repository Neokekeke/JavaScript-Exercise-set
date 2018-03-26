/**
 * Created by mes on 2018/3/5.
 */

//promise同步的异步，then()函数会返回一个promise对象，然后再在给个then的执行模块中引用
//promise函数接受一个函数作为参数，函数有两个参数，两个参数也是函数
//then接受两个函数作为参数，fulfilled和rejected
//setTimeout会开辟一个新的任务队列，最后异步执行，then要等到页面中所有同步任务执行完再执行
//函数有入栈和出栈的，即内存回收机制，先执行的函数后出栈

console.log("promise开始执行"); //1
new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("内部的计时器"); //7
        },0);
        resolve(100);
        console.log("promise执行中"); //2
    })
    .then(value => {
        console.log("第一个then");  //上面resolve的值 4
    },error => {
        console.log(error);
    })
    .then(value => {
        console.log("第二个then"); //5
    });

setTimeout(()=>{
    console.log("外部计时器"); //6
},0);

console.log(200); //3

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

// Promise.all(iterable), 参数是一个可迭代的参数（一个可迭代对象，如 Array 或 String），
// 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；
// 如果参数中  promise 有一个失败（rejected），此实例回调失败（rejecte），
// 失败原因的是第一个失败 promise 的结果。
// 如果传入的可迭代对象是空的，就是同步，如果 Promise.all 失败，也是一样同步：
// 此方法在集合多个 promise 的返回结果时很有用。

// 完成（Fulfillment）：
// 如果传入的可迭代对象为空，Promise.all 会同步地返回一个已完成（resolved）状态的promise。
// 如果所有传入的 promise 都变为完成状态，或者传入的可迭代对象内没有 promise，Promise.all 返回的 promise 异步地变为完成。
// 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组，它包含所有的传入迭代参数对象的值（也包括非 promise 值）。
//
// 失败/拒绝（Rejection）：
// 如果传入的 promise 中有一个失败（rejected），Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成。