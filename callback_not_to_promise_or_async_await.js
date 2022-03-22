var fs = require("fs");
console.log("ab");
//必须加promises，否则不能连接then结构
fs.promises.readFile("1.txt").then(()=>{console.log("fs")});
//fs.readFile("1.txt",(err,data)=>{if(err){console.log("error");}else{console.log(data.toString());}})
console.log("cd");
