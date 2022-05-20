/*
Solution to problem
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
*/
function arrayDiff(a, b) {
  //edge case, return if is empty
  if(a.length === 0){
    return a
  }
  
  let aCopy = [...a]
  let bCopy = [...b]
  let answer = []
  
  while(bCopy.length > 0){
    //if they are equal pop all equality from a
    if(aCopy[0] === bCopy[0]){
      while(aCopy[0] === bCopy[0]){
        aCopy.shift()
      }
      bCopy.shift()
    }
    //if they are diffrent, push all the unique values
    //in answer
    else if(aCopy[0] !== bCopy[0]){
      while(aCopy[0] !== bCopy[0]){
        answer.push(aCopy.shift())
      }
    }
  }
  
  return answer.length ? answer : aCopy
}