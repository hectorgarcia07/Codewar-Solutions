/*
Solution for
https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/
function findOdd(A) {
  let set = new Set()
  //if a val exist in the set, delete it, otherwise add it
  A.forEach(val => set.has(val) ? set.delete(val) : set.add(val))
  return [...set][0]//there should only be 1 value that is the odd one
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))