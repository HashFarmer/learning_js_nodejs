

function printString(){
    console.log("first line in function"); 
    setTimeout(function()  { console.log("second line in function"); }, 0); 
   console.log("Third line in function")
 }

 console.log("before function.");
 printString();
 console.log("after function.");