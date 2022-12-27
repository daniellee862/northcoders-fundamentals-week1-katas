// Please do not change the name of this function
function foldString(str) {
  const wordArray = str.split(" ");
  const foldedWordArray = [];

  wordArray.forEach((word) => {
    const isStringEven = word.length % 2 === 0;
    const stringArr = word.split("");
    const firstHalfFolded = stringArr
      .slice(0, stringArr.length / 2)
      .reverse()
      .join("");

    const secondHalfFolded = stringArr
      .slice(-stringArr.length / 2)
      .reverse()
      .join("");

    const centerChar = stringArr[Math.floor(stringArr.length / 2)];

    if (isStringEven) {
      foldedWordArray.push(firstHalfFolded + secondHalfFolded);
    } else {
      foldedWordArray.push(firstHalfFolded + centerChar + secondHalfFolded);
    }
  });

  return str.length > 2 ? foldedWordArray.join(" ") : str;
}

module.exports = foldString;
