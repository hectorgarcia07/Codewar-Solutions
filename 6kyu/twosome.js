/*
Solution for 
https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
*/
function twoSum(numbers, target) { 
  let len = numbers.length
  
  for(let i = 0; i < len; i++ ){
    for(let j = 0; j < len; j++){
      if(i !== j && numbers[i] + numbers[j] === target){
        return [i, j]
      }
    }
  }
}