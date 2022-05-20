/*
Solution to problem
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/
function positiveSum(arr) {
  return arr.reduce((total, curr) => {
    if(curr > 0){
      return total + curr
    }
    return total
  }, 0)
}