// Please do not change the name of this function

/* # NOTE TO SELF; DANIEL.
make use of look up tables for katas requiring rulesets of more than two conditions. */

function tillAddition(cash) {
  const cashArr = Object.entries(cash);

  let total = 0;

  const handleSum = (amount) => {
    total += amount;
  };

  cashArr.forEach((value) => {
    switch (value[0]) {
      case "1p":
        handleSum(0.01 * value[1]);
        break;
      case "2p":
        handleSum(0.02 * value[1]);
        break;
      case "5p":
        handleSum(0.05 * value[1]);
        break;
      case "10p":
        handleSum(0.1 * value[1]);
        break;
      case "20p":
        handleSum(0.2 * value[1]);
        break;
      case "50p":
        handleSum(0.5 * value[1]);
        break;
      case "£1":
        handleSum(1 * value[1]);
        break;
      case "£2":
        handleSum(2 * value[1]);
        break;
      case "£5":
        handleSum(5 * value[1]);
        break;
      case "£10":
        handleSum(10 * value[1]);
        break;
      case "£20":
        handleSum(20 * value[1]);
        break;
      case "£50":
        handleSum(50 * value[1]);
        break;
      default:
      // code block
    }
  });

  return `£${total.toFixed(2)}`;
}

module.exports = tillAddition;
