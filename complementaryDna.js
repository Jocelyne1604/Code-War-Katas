function DNAStrand(dna) {
  // place to store the compliment string
  let compliment = "";

  let compliments = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };

  // iterate over dna
  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i];
    compliment += compliments[currentLetter];
  }

  // return compliment string
  return compliment;
}
