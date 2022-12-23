// Please do not change the name of this function
function sentenceToCamelCase(sentence, boolean) {
  const camelCaseWordArray = sentence.split(" ").map((word, index) => {
    return index === 0 && !boolean
      ? word
      : word.charAt(0).toUpperCase() + word.slice(1);
  });

  return sentence.length === 0 ? "" : camelCaseWordArray.join("");
}

module.exports = sentenceToCamelCase;
