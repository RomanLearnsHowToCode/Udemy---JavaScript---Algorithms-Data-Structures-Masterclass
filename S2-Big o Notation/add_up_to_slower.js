// file provided by course leader
const { performance } = require('perf_hooks'); 

/*
- We are having n operations! if n = 1000, then we have to do N additions, N assignments on line 8, then n additions and n assignments on line 7
n comparison etc.. there is a lot of operations

- The number of operations grows roughly proportinally with N! 
*/

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// the result on my machine is roughly 2 seconds