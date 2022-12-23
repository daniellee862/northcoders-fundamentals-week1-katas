// Please do not change the name of this function
function dnaPairs(dna) {
  const objectLookUp = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"],
  };

  return dna.split("").map((letter) => objectLookUp[letter]);
}

module.exports = dnaPairs;
