import fetch from 'node-fetch';
//await 不用放在async中了？

//https://javascript.info/async-await
//In modern browsers, await on top level works just fine, when we’re inside a module. We’ll cover modules in article Modules, introduction.
const response = await fetch('https://baijiahao.baidu.com/s?id=1723020089873167316');
const body = await response.text();

console.log(body);