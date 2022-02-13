const myPromise = Promise(
        (resolve, reject)=>{
            const rand = Math.floor(Math.random()*2);
            if(rand===0){
                resolve();
            }else{
                reject();
            }

        }
    );