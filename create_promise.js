//new 不可少
const myPromise = new Promise(
        (resolve, reject)=>{
            const rand = Math.floor(Math.random()*2);
			//没有===这种吧，反正会出错
            if(rand==0){
                resolve();
            }else{
                reject();
            }
        }
    );
