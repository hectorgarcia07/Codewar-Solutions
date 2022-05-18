/*
Solution to problem
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
*/
function sortArray(array) {
  let evenArr = array.filter(val => val % 2 === 0)
  let oddArr = array.filter(val => val % 2 !== 0).sort((a,b ) => a-b)
  let answer = Array(array.length)
  
  array.forEach((val, i) => {
    if(val % 2 === 0){
      answer[i] = evenArr.shift()
    }
    else if(val % 2 !== 0){
      answer[i] = oddArr.shift()
    }
  });
  return answer
}