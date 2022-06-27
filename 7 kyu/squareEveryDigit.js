// SQUARE EVERY DIGIT

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// SOLUTION:

function squareDigits(num) {
  return Number(
    num
      .toString() // turns the number into a string: (num === "555")
      .split("") // splits that string into seperate individual strings: ["5", "5", "5"]
      .map(function (val) {
        return val * val; // "5" * "5" === 25 (Type coversion) ==> Now we have [25, 25, 25]
      })
      .join("") // joins all the numbers together to form one number: (252525)
  );
}
