var fs = require("fs");

async function foo() {

    //await 只对返回值为promise的有效？
    const content = await fs.readFile('input.txt');

    console.log(data.toString());

}

foo();

/*
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
*/

console.log("程序执行结束!");