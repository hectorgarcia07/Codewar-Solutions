/*
Solution to problem
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
*/
function solution(str, ending){  
  let strEnd = str.length - 1
  for(let i = ending.length -1; 0 <= i; i--){
    if(ending[i] !== str[strEnd]){
      return false
    }
    strEnd--
  }
  return true
}