// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here

  let sum = 0;

  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return num < 4 ? 0 : sum;
}

module.exports = calculateDivisors;
