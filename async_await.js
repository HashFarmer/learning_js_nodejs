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

loadFile();