/*
Solution to problem
https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
*/
function tribonacci(signature, n){
  if(n < 3){
    let answer = []
    for(let i = 0; i < n; i++){
      answer.push(signature[i])
    }
    return answer
  }

  let answer = [...signature]
  let length = 0

  while(answer.length < n){
    length = answer.length - 1
    answer.push( answer[length] + answer[length - 1] + answer[length - 2] )
  } 

  return answer
}