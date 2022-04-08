// program to print the text
// variable a cannot be used here
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    if(a == 'hello'){
        // variable b can be used here
        let a = 'halo';
        var b = 'world';// var 与 let 的区别
        console.log(a + ' ' + b);
    }

    // variable b cannot be used here if use let
    // variable b can be used here if use var
    console.log(a + ' ' + b); // error
}
// variable a cannot be used here

greet();