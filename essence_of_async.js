//https://stackoverflow.com/questions/45175743/async-function-as-callback
// An async function is just syntactic sugar for a regular function that returns a Promise. 
//有返回值的 async 函数
const foo = async function (arg) {
    return arg * 2
}

//返回的结果就是一个promise
const fooReturn = foo(2);

console.log('foo(2) = ', fooReturn);

console.log('foo(2) =>', fooReturn.toString());

//由then引导一个函数把promise里的内容解读出来
fooReturn.then(fooResult => console.log('await foo(2) =>', fooResult));


/*
function getAsyncData(someValue){
    return new Promise(function(resolve, reject){
        getData(someValue, function(error, result){
            if(error){
                reject(error);
            }
            else{
                resolve(result);
            }
        })
    });
}

*/
