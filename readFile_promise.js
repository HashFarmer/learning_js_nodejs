const fs = require('fs');

console.log("before readFile promise!");
//所有的异步回调函数都可以这样promise化吗？
fs.promises.readFile('./example.txt', {encoding:'utf-8'})
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.error(err)});
console.log("after readFile promise!");