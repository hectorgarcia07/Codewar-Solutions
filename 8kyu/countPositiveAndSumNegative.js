/*
Solutoin for:
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript
*/
function countPositivesSumNegatives(input) {
  if(!input){
    return []
  }
  let positiveCount = null
  let total = null
  input.forEach(value => {
    if(value > 0){
      positiveCount = Number(positiveCount) + 1
    }else if(value < 0){
      total = Number(total) + value
    }
  })
  return (total == null && positiveCount == null) ? [] : [Number(positiveCount), Number(total)]
}