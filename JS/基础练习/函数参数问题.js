/**
 * Created by mes on 2018/3/8.
 */


function test1(a){
    console.log("test：",a);//1
    console.log(arguments[1],arguments[2]);//undefined , undefined
}
test1(1,2,3);

function test2(a,b){
    console.log("test1：",a,b); //1 , undefined
    console.log(arguments[1]); //undefined
}
test2(1);