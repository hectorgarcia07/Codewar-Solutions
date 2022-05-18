/*
Solution for:
https://www.codewars.com/kata/5592e3bd57b64d00f3000047/solutions/javascript
*/
function findNb(m) {
  let total = 0
  let i = 0
  while(total < m && total != m){
    i++
    total += i ** 3
  }
  return total == m ? i : -1
}