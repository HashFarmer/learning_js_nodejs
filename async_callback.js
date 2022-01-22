const fs = require('fs');
console.log(1);
fs.readFile('./example.txt',{encoding:'utf-8'},(err,data)=>{
    console.log(data);
});
console.log(2);
