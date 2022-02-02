const fs = require('fs');

async function loadFile(){

    try {
        console.log("Before await promise");
        const data = await fs.promises.readFile('./example.txt', {encoding:'utf-8'});
        //console.log("After await promise");//不能打断await？
        console.log(data); //这个就是处理await promise的返回值的函数，相当于then 引导的resolve
        console.log("After await promise console.log(data)");
    //错误的处理则用try-catch结构
    } catch (error) {
        console.error(error);
    }

}

//这个loadFile还是返回promise吗？
//但是这个loadFile并没有返回什么值，应该是不会返回promise了。

//console.log("Before aysnc function");
loadFile();//即便是async函数内部也是拆开执行。
//console.log("After aysnc function");