//outer -> inner
//nested async callback to execute dependent(sync) operations
setTimeout(()=>{
    console.log('preparing x value.');
    let x = 3;
    setTimeout(()=>{
        console.log('preparing y value.');
        let y = 4;
        setTimeout(()=>{
            console.log('calculating x + y.');
            console.log(x + y);
        },1000);
    },1000);
},1000);
