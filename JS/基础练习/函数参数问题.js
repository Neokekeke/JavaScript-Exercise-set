/**
 * Created by mes on 2018/3/8.
 */


function test1(a){
    console.log("test：",a);//1
    console.log(arguments[1],arguments[2]);//2,3
}
test1(1,2,3);

function test2(a,b,c){
    console.log("test1：",a,b,c); //1 , undefined
    console.log(arguments[1]); //undefined
}
test2(1,2);