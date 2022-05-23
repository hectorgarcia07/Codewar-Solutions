/*
Solution to problem
https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
*/
function solution(input, markers) {
  let inputArr = input.split('')
  let answer = ''
  let matchFound = false
  
  inputArr.forEach(char => {
    
    if(matchFound && char == "\n"){
      answer += char
      matchFound = false
    }
    else if(markers.includes(char)){
      matchFound = true
      answer = answer.slice(0, -1)
    }else if(!matchFound){
      answer += char
    }
  })

  return answer
}

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))