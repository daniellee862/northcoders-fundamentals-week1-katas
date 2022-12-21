// Please do not change the name of this function

function tillAddition(cash) {
  const coinTable = {
    "1p": 0.01,
    "2p": 0.02,
    "5p": 0.05,
    "10p": 0.1,
    "20p": 0.2,
    "50p": 0.5,
    "£1": 1,
    "£2": 2,
    "£5": 5,
    "£10": 10,
    "£20": 20,
    "£50": 50,
  };

  let sumOfAllCoins = 0;

  const typesOfCoinAndAmounts = Object.entries(cash);

  typesOfCoinAndAmounts.forEach((coinType) => {
    sumOfAllCoins += coinTable[coinType[0]] * coinType[1];
  });

  return `£${sumOfAllCoins.toFixed(2)}`;
}

module.exports = tillAddition;
