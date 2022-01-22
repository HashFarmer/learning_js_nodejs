//node-fetch的导入只支持 import 且 .mjs

import fetch from 'node-fetch';

//const fetch = require('node-fetch');

console.log("before fetch.");

// then chain
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res)=>res.json())
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.error(err)});

console.log("after fetch.");