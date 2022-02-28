var fs = require("fs");
console.log("ab");
fs.readFile("1.txt").then(()=>{console.log("fs")};);
//fs.readFile("1.txt",(err,data)=>{if(err){console.log("error");}else{console.log(data.toString());}})
console.log("cd");
