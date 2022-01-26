//这一句被最后执行不是因为它消耗的时间长
//执行次级不是由其消耗的时间长短决定的
setTimeout(()=>console.log("Hello,setTimeout!"),0);

let k = 1000000000;
for (let i = 0; i < k; i++) {
    if (i==(k-1)) {
        console.log(i)
    }
}
console.log("End of the for loop");