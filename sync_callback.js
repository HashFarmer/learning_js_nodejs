function isOdd(number) {
    return number % 2 != 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  console.log("before callback.");
  console.log(filter(numbers, isOdd));
  console.log("after callback.");
/*
**Synchronous callbacks**
A synchronous callback is executed during the execution of the high-order function that uses the callback.
The isOdd and isEven are examples of synchronous callbacks because they execute during the execution of the filter() function.
*/
//https://www.javascripttutorial.net/javascript-callback/
