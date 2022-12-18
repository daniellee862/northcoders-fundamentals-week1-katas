// Please do not change the name of this function
function calculateDivisors(num, total) {
  // Your code here

  let multiples = [];

  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  const sortedMultiples = multiples.sort((a, b) => a - b);

  //could use .reduce here
  let sum = 0;

  sortedMultiples.forEach((number) => (sum += number));

  return num < 4 ? 0 : total ? sum : sortedMultiples;
}

module.exports = calculateDivisors;
