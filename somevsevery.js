//For example, let's say you have an array of numbers [5, 10, 15, 20].
//You could use the .some() method to check if at least one number in the array is greater than 10 like this:

let numbers = [5, 10, 15, 20];
let result = numbers.some(number => number > 10);
console.log(result); // true

//You could use the .every() method to check if all the numbers in the array are greater than 10 like this:

let nums = [5, 10, 15, 20];
let res = numbers.every(number => number > 10);
console.log(result); // false
