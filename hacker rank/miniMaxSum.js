// MINI-MAX SUM

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.

// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// SOLUTION:

function miniMaxSum(arr) {
  // Write your code here
  let newArr = arr.sort();
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  let max = sum - newArr[0];
  let min = sum - newArr[newArr.length - 1];

  console.log(min, max);
}
