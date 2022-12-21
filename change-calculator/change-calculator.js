// Please do not change the name of this function
function changeCalculator(num) {
  // Your code here

  let changeObject = {};

  const coinValues = [50, 20, 10, 5, 2, 1];

  const howManyCoins = (coin) => {
    let amount = parseInt(num / coin);
    changeObject[coin] = amount;
    num = num % coin;
  };

  coinValues.forEach(
    (coinValue) => coinValue <= num && howManyCoins(coinValue)
  );

  return changeObject;
}

module.exports = changeCalculator;
