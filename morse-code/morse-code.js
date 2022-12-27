const morseLookup = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": 0,
  ".----": 1,
  "..---": 2,
  "...--": 3,
  "....-": 4,
  ".....": 5,
  "-....": 6,
  "--...": 7,
  "---..": 8,
  "----.": 9,
};

function morseCode(str) {
  const lettersArray = str.split(" ");
  let decodedArray = [];

  lettersArray.forEach((letter, letterIndex) => {
    if (morseLookup[letter]) decodedArray.push(morseLookup[letter]);
    if (letter === "" && lettersArray[letterIndex + 1] === "")
      decodedArray.push(" ");
  });

  return str.length > 0 ? decodedArray.join("") : str;
}

module.exports = morseCode;
