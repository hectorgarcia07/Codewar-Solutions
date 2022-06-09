/*
Solution for:
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a','e','i','o','u']
  
  str.split('').forEach(char => {
    if(vowels.includes(char)){
      vowelsCount++
    }
  })
  
  return vowelsCount;
}