/*
Solution for the problem https://www.codewars.com/kata/5254ca2719453dcc0b00027d
*/
function permutations(string) {
  let uniquePerm = new Set()//will hold unique permutations
  findPerm('', string, uniquePerm)
  return [...uniquePerm]
}

function findPerm(currentStr, sourceStr, set){
  let n = sourceStr.length
  if(n === 0){
    set.add(currentStr)//add the found permutation in set
  }
  else{
    for(let i = 0; i < n; i++){
      let newCurrStr = currentStr + sourceStr[i]
      let updatedSrcStr = sourceStr.substring(0, i) + sourceStr.substring(i+1, n)
      findPerm(newCurrStr, updatedSrcStr ,set)
    }
  }
}