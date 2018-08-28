
const express = require('express');
const Url = require('url');
const app = express();
const bodyParser = require('body-parser');

// express.static 提供静态文件，就是html, css, js 文件
app.use(express.static('public'));

// 添加 body-parser 中间件就可以了看到客户端传过来的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log("1",module);
console.log("2",exports);
console.log("3",require);
console.log("6",__filename);
console.log("7",__dirname);
let obj = {

};

Object.defineProperties(obj , {
    name : {
        writable : false,
        value : 'aaa',
        configurable : true,
        enumerable : true
    }
   
});
console.log(obj);


// 获取城市列表
var province = {
    success : true,
    obj : {
        province : "广东",
        city : "珠海",
    }
};
// 错误
var error = {
    success : false,
    obj : {
        txt : "数字是必传的"
    }
}
app.post('/getProvince' , (req , res) => {
    setTimeout( () => {
        console.log(req.body.num , req.body.num.toString().length);
        if (req.body.num !== Number && req.body.num.toString().length > 0) {
            res.json(province);
        }
        else {
            res.json(error);
        }
    },1000);
});

// 获取充值面额
app.post('/getChargeMoney' , (req , res) => {
    setTimeout( () => {
        res.json({
            success : true,
            obj : [20 , 50 , 100]
        })
    },1000);
});

app.listen(3000 , function () {
    console.log("监听3000端口中...");
});