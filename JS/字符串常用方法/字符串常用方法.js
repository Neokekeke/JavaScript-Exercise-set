/**
 * Created by mes on 2018/3/6.
 */

//  字符串的操作
var str = "hello world";

//1  chatAt(),chatCodeAt()
// 参数是下标，chatAt返回字符串，chatCodeAt返回字符串的编码
console.log(str.charAt(2));
console.log(str.charCodeAt(2));

//2  indexOf() ,lastIndexOf()
//  在一个字符串中从字符串的开头向后搜索给定的子字符串，然后返子字符串的位置（如果没有找到该子字符串，则返回-1）。
//  可以接收两个参数，第一个参数是要寻找的字符串，第二个参数是从哪里开始找
console.log(str.indexOf('o' , 3));
console.log(str.lastIndexOf('o' , 3));

//3  concat() 用于将一或多个字符串拼接起来，返回拼接得到的新字符串。可以接收多个参数，表示需要拼接的字符串。
var str2 = "go go go";
var str3 = str.concat(str , str2);
console.log(str3);
console.log(str); //   原字符串不变

//4  slice() [包含，不包含)
//  从字符串中截取一段子字符串，接收两个参数：
//  第一个参数指定子字符串的开始位置，
//  第二个参数指定的是子字符串最后一个字符后面的位置（如果没有指定第二个参数，则一直到字符串结尾）。
//  该方法对原字符串没有影响。
//  上述代码中，当传入的参数为负数时，会将该负数加上字符串的长度转换成正数，再进行截取。
//  如果传入的负数的绝对值大于字符串的长度，则用0替代。
console.log(str.slice(1,6));
console.log(str.slice(-9)); //llo world
console.log(str.slice(2,-3)); //llo wo
console.log(str);

//5  substr() [包含，截取的长度
//  也是从一个字符串中截取一段子字符串，该方法也接收两个参数：
//  一个也是截取的起始位置，
//  第二个参数是截取的子字符串长度（如果不设置的话，截取到字符串最后）。
//  该方法对原字符串没有影响。
//  当传入两个参数时，第二个参数表示截取子字符串的长度。
//  当第一个参数传入的是负数时，同样将其加上字符串的长度转化成正数，
//  但是第二个参数代表截取字符串的长度，如果传入的是负数，则截取的是空字符串。
console.log(str.substr(2,7));
console.log(str.substr(2,-1));

//6  subString() [包含，不包含)
//  同样是从字符串中截取一段子字符串，接收的参数也和slice()一样，
//  但是如果传入的参数是负数时，处理方式与slice()不一样。该方法对原字符串没有影响。
//  如果传入的参数是负数时，不论负数为多少，都将负数转变为0。
var str5 = "HELLO WORLD";
console.log(str.substring(2,-1));
console.log(str.substring(1,7));

//7 trim() 该方法是ES5新增方法，用来删除字符串前置及后缀的所有空格。
var str6 = "   hello world   ";
var strCopy = str.trim();
console.log(str6); //"   hello world   "
console.log(strCopy); //"hello world"

//8  toLowerCase() 和 toUpperCase()转换大小写

//9  replace()
//  用来查找匹配的字符串，然后使用新字符串代替匹配的字符串。
//  这个方法接受两个参数：第一个参数可以是一个 RegExp 对象或者一个字符串（这个字符串不会被转换成正则表达式），
//  第二个参数可以是一个字符串或者一个函数。
//  如果第一个参数是字符串，那么只会替换第一个子字符串。
//  要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局（g）标志。
//  第二个参数也可以是一个函数。该函数接受 3 个参数：模式的匹配项、模式匹配项在字符串中的位置和原始字符串。
var gg = "boo, foo, book, good, look";
var mat = gg.replace('oo', 'aa');
console.log(mat);
mat = gg.replace(/oo/g , 'aa');
console.log(mat);
mat = gg.replace(/oo/g , function(match , index , orginalText){
    //这里是遍历字符串，如果有匹配项
    //模式的匹配项、模式匹配项在字符串中的位置和原始字符串
    console.log(match + ":" + index + ":" + orginalText);
});

//10  split()
//   基于指定的分隔符将一个字符串分割成多个子字符串，
//   并将结果放在一个数组中。该方法是将字符串转成数组常用的方法。
//   split()方法接收两个参数：第一个参数是分隔符，可以是字符串，
//   也可以是一个 RegExp 对象（这个方法不会将字符串看成正则表达式）；第二个参数是返回数组的大小。
//   第一个参数分隔符为空时，字母一个一个分割
var hg = "boo, foo, book, good, look";
var hgg = hg.split('' , 2);
console.log(hgg);