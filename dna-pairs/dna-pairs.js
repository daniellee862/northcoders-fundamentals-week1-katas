// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here
  if (dna === "") {
    return [];
  }

  let array = [];

  //ORIGINAL SOLUTION
  // for (let i = 0; i < dna.length; i++) {
  //   if (dna[i] === "A") {
  //     array.push(["A", "T"]);
  //   } else if (dna[i] === "T") {
  //     array.push(["T", "A"]);
  //   } else if (dna[i] === "C") {
  //     array.push(["C", "G"]);
  //   } else {
  //     array.push(["G", "C"]);
  //   }
  // }

  //OPTIONS FOR REFACTOR:
  //SWITCH STATMENT .
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        array.push(["A", "T"]);
        break;
      case "T":
        array.push(["T", "A"]);
        break;
      case "C":
        array.push(["C", "G"]);
        break;
      case "G":
        array.push(["G", "C"]);
        break;
      default:
        // code block
        break;
    }
  }

  return array;
}

module.exports = dnaPairs;
