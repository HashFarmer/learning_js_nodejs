//new 不可少
const myPromise = new Promise(
            (resolve, reject)=>{
                const rand = Math.floor(Math.random()*2);
                //没有===这种符号吧？反正使用了会出错
                if(rand==0){
                    resolve();
                }else{
                    reject();
                }
            }
       );
//promise中含有未定函数，正如函数中含有未定参数