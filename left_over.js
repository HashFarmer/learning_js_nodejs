//即使millisec设置为0，还是会劣后执行
setTimeout(()=>{console.log("hello, setTimeout!")},0);
//for语句即使需要很长时间，也不会劣后执行
//由此可见，执行的“优先”“劣后”并不是以消耗时间的长短为标准
for(i =0; i<1000000000; i++){ 
//if(i==999999999) console.log(i);
}
console.log("hello, no setTimeout!")
