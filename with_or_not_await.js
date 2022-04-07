
async function test1(){
    setTimeout(() => {
        console.log("111")        
    }, 2000);
}


async function test2(){
    return 'hello node js!';
}

//仅仅有一个console.log()语句的async function也返回promise吗？
async function test3(){
    console.log('Hello,test3');
}

//test3();

// 貌似时 await把整个流程变成“同步阻塞”式的了？不是
// 还是先输出test2
//async 函数在与不在另一个async函数中，决定了有无await
async function main(){

    //console.log(test1());

    //console.log(test2());

	console.log(test3());

}

main();
