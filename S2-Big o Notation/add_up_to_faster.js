// file provided by course leader
const { performance } = require('perf_hooks'); 

// we have got three operations here, multiplication, addition and divison
function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//the result on my machine is roughly.. 0.00004 seconds