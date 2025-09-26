// Exercise 3: Set
// Instructions: Create a Set named `uniqueNumbers` and add some numbers to it using .add(), including some duplicates.
// Verify that the Set only keeps unique values by logging it to the console.

const uniqueNumbers = new Set();
const numbers = [];

// Your code here
for (let i = 0; i < 5; i++) {
  numbers.push(i);
  numbers.push(i);
  uniqueNumbers.add(i);
  uniqueNumbers.add(i);
}

console.log(uniqueNumbers);
console.log(numbers);
