/*
Solution to problem:
https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
*/
function DNAStrand(dna){
  let str = dna.split('').reduce((char, currStr) => {
    if(currStr == 'A'){
      return char + 'T'
    }else if(currStr == 'T'){
      return char + 'A'
    }else if(currStr == 'G'){
      return char + 'C'
    }else if(currStr == 'C'){
      return char + 'G'
    }
  }, '')

  return str
}

console.log(DNAStrand("ATTGC"))