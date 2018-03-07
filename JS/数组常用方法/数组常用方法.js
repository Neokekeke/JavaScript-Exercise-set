/**
 * Created by mes on 2018/3/6.
 */

//数组的常用方法
//1  join(separator)
//  将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符
var arr = [1,2,3];
console.log(arr.join("a"));
function copyArr(n , str){
    console.log(new Array( n + 1 ).join(str));
}
copyArr(5 , "abc");

//2 push()和pop()
//  push()在数组末尾添加，pop()在数组末尾删除
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);

//3 shift()和unshift()
//  shift()从头部移除元素，unshift()从头部添加元素
arr.unshift(66);
console.log(arr);
arr.shift();
console.log(arr);

//4 sort() 按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
// 在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，
// 以确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现以下的这种情况：
arr2 = [13, 24, 51, 3];
console.log(arr2.sort()); // [13, 24, 3, 51]
console.log(arr2); // [13, 24, 3, 51](原数组被改变)

function compare(arr){
    var index = arr.length-1;
    while(index > 0){
        var pos = 0;
        for(var i = 0; i < index; i++){
            if(arr[i] > arr[i+1]){
                var tem = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = tem;
                pos = i;
            }
        }
        index = pos;
    }
    return arr;
}
var a =  compare(arr2);
console.log(a);

function compareArr(value1 , value2){
    if(value1 > value2){
        return 1;
    }
    else if(value1 < value2){
        return -1
    }
    else{
        return 0;
    }
}
var arr3 = [3,1,2,6,9,0];
console.log(arr3.sort(compareArr));

//打乱数组函数
function ranArr(){
    return Math.random() - 0.5;
}
console.log(arr3.sort(ranArr));


//5  reverse()反转数组项的顺序。
console.log(arr3.reverse());

//6  concat()
//  将参数添加到原数组中。这个方法会先创建当前数组一个副本，
//  然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
//  在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
//  也就是说concat方法只能将传入数组中的每一项添加到数组中，
//  如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy2中。
//  原数组不变
var a = [1,23,3];
var aCopy = a.concat('a',[5,6]);
console.log(aCopy);
aCopy = a.concat([6,[1,2]]);
console.log(aCopy);

//7  slice() [包含，不包含)
//   返回从原数组中指定开始下标到结束下标之间的项组成的新数组。
//   slice()方法可以接受一或两个参数，即要返回项的起始和结束位置
//   在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项
//   如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。
//   两个参数都是负数，所以都加上数组长度加上负数转换成正数
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);

console.log(arr); //[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy); //[3, 5, 7, 9, 11]
console.log(arrCopy2); //[3, 5, 7]
console.log(arrCopy3); //[3, 5, 7]
console.log(arrCopy4); //[5, 7, 9]

//8  splice() 很强大的数组方法，它有很多种用法，可以实现删除、插入和替换
//  删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
//  插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
//  替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
//  splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]

var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []

var arrRemoved3 = arr.splice(1,5,2,3);
console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]

//9 indexOf()和lastIndexOf()
//  indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。
//  lastIndexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。
//  这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
var test = [1,2,3,5,6,7];
var res = test.indexOf(2,1);
res = test.lastIndexOf(3,2);
console.log(res);

//10 forEach()
//  对数组进行遍历循环，对数组中的每一项运行给定函数。
//  这个方法没有返回值。参数都是function类型，默认有传参，
//  参数分别为：遍历的数组内容；第对应的数组索引，数组本身。
var test2 = [1,2,3,5,6,7];
test2.forEach(function(content , index , arr){
   console.log(content + " | " + index + " | " + (arr === test2));
});

//11 map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
var test3 = [1,23,33];
var res2 = test3.map(function(item){
   return item;
});
console.log(res2);
res2.push(11);
console.log(test3 + " | " + res2);

//12 filter() 数组过滤功能，返回满足过滤条件的数组
var aar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = aar.filter(function(x, index) {
    //x是数组每一项的值，index是数组每一项的下标
    console.log("x=",x);
    return index % 3 === 0 && x >= 8;
});
console.log(arr2);  //[1, 4, 7, 8, 9, 10]