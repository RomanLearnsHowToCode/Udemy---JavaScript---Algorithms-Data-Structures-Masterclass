const { performance } = require('perf_hooks'); // Import of perofrmance module
// this file is for big o notation
// to run this file navigate to directory and run node bigo.js in terminal

// Big O notation is a numeric representation of code performance

/*
Who cares? - it is important to have a precise vocabulary to talk about how our code performs, discuss trade-offs between different aproaches
when your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications,
Less importnat: it comes up in interviews!
*/

console.log("Hello World");

// write a function that accepts a string input and returns a reversed copy

// suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n

function addUpTo(n){
    let total = 0;
    for (let i = 1; i <=n; i++) {
        total += i;
    }
    return total;
}

// second solution

function addUpTo2(n){
    return n*(n+1) /2;
}

// what does mean? which one is better?
// Faster? 
// Less memory-intensive?
// More readable?

// timing function
let t12 = performance.now();
//addUpTo(100000000);
//addUpTo2(100000000);
let t22 = performance.now();
//console.log(t22-t12) / 1000;

// Date.now() is also timing function, this one works in node without import
/*
let t1 = Date.now();
addUpTo(100000);
let t2 = Date.now();
console.log(t2 - t1 * 1000);
*/

// the result is that first addUpTo function takes 2 seconds to finalise, the second AddUpTo2 functions takes 0.05 seconds!

// when we are talking about Big O we are talking about the worst case scenario

// function countUpandDown

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing Down...");
    for (let j = n -1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }
  countUpAndDown(10);

  // big O for this function is O(n) going up, O(n) going down

  // function printAllPairs()

  function printAllPairs(n) {
      for (var i = 0; i < n; i++){
          for (var j = 0; j < n; j++){
              console.log(i,j);
          }
      }
  }
  printAllPairs(10);

  // O(n) & O(n) nested loop O (n*n) = N squared


  // Simplifiying Big O expressions
  /* 
  1)Arithmetic operations are constant
  2)Variable assignment is constant
  3)Accesing elements in an array (by index) or object (by key) is constant
  4)In a loop, the complexity is the lenght of the loop times the complexity of whatever happens inside of the loop  
  */

  function logAtLeast5(n){
    for (var i = 1; i <= Math.max(5,n); i++){
        console.log(i);
    }
  }

  logAtLeast5(4);