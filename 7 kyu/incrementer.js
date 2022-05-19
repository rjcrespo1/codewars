// INCREMENTER

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2

// SOLUTION:

function incrementer(num) {
  if (num == []) return [];
  return num.map((n, i) => (i + n + 1) % 10);
}

// if num is an empty array, return empty array
// map the num input, taking each number and its index as parameters... then sum the index + number + 1... 
// I summed one because I have to start counting the postions from 1, so every index needs to be summed one
// then to that result I used the % operator so it returns only the remainder of the division and I can get only the second digit of the result because it is divided by 10