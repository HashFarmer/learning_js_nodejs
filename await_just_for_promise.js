var fs = require("fs");

async function foo() {

    //await 只对返回值为promise的有效？是的！
    //const content = await fs.readFile('input.txt');

    const data = await fs.promises.readFile('./example.txt', {encoding:'utf-8'});

    console.log(data.toString());

    console.log(data);

}


//这个foo()本质就是一个promise-then
foo();

/*
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
*/

console.log("程序执行结束!");