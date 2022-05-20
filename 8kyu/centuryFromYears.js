/*
Soluion to problem
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript
*/
function century(year) {
  let totalYears = 0
  while(year > 0){
    year -= 100
    totalYears++
  }
  return totalYears
}