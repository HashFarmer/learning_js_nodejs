//异步的callback结构是没有返回值的？，返回值直接被callback函数处理了

function A(){
    let a = 1;
    return a;
}

function B(){
    let b = 1;
    return b;
}


let time = setTimeout(A, 1000 );
//let y = setTimeout(B, 1000 );
console.log(time)
