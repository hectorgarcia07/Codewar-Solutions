/*
Solution for:
https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
*/
function nbYear(p0, percent, aug, p) {
  let totalYear = 0
  let totalPop = p0
  
  while(totalPop < p){
    totalPop += Math.floor(totalPop * (percent / 100)) + aug
    totalYear++
  }
  
  return totalYear
}