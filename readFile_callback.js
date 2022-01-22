const fs = require('fs');
console.log(1);
//如何分辨 异步的callback与同步的callback
fs.readFile('./example.txt',{encoding:'utf-8'},(err,data)=>{
    console.log(data);
});
console.log(2);
