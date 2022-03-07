//
const myPromise = new Promise((resolve, reject)=>{
    const rand = Math.floor(Math.random()*2);
    //console.log("In promise.");
    if(rand==0){
        resolve();
    }else{
        reject();
    }
});




console.log("before promise!");
myPromise.then(()=>{console.log('-promise Success!-')}).catch(()=>{console.error('-something went wrong!-')});
console.log("after promise!");

//结论：
//promise定义也是拆开执行的
//promise也是劣后执行的


