const express = require('express'); //1
const server = express(); //2

server.get('/a',(req,res) => { //3
	//返回的是不是json格式呢？    
	res.send('Hello,Express!');
});

server.listen(3000); //4
