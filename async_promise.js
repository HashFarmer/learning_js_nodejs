//
const myPromise = new Promise((resolve, reject)=>{
    const rand = Math.floor(Math.random()*2);
    if(rand==0){
        resolve();
    }else{
        reject();
    }
});

//promise也是劣后执行的
console.log("before promise!");
myPromise
    .then(()=>{console.log('promise Success!')})
    .catch(()=>{console.error('something went wrong!')});
console.log("after promise!");