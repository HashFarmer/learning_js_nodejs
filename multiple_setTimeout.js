//setTimeout(console.log('等待0秒钟'), 0 );
//必须把console.log()放入函数中


//结果证明：等待时间短的先执行完
setTimeout(()=>{console.log('等待3秒钟')}, 3000 );
setTimeout(()=>{console.log('等待2秒钟')}, 2000 );
setTimeout(()=>{console.log('等待1秒钟')}, 1000 );
setTimeout(()=>{console.log('等待0秒钟')}, 0 );
