//即使millisec设置为0，还是会劣后执行
setTimeout(()=>{console.log("hello, setTimeout!")},0);
//for语句即使需要很长时间，也不会劣后执行
//由此可见，执行的“优先”“劣后”并不是以消耗时间的长短为标准
for(i =0; i<1000000000; i++){ 
//if(i==999999999) console.log(i);
}
console.log("hello, no setTimeout!")




//函数内部的setTimeout也被放置在程序最后执行
function printString(){
    console.log("first line in function"); 
    setTimeout(function()  { console.log("second line in function"); }, 0); 
   console.log("Third line in function")
 }

console.log("before function.");
printString();
console.log("after function.");
