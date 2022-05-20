/*
Solution for
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
*/
function duplicateEncode(word){
  let map = new Map()
  let str = word.toLowerCase().split('')
  let answer = ''
  
  str.forEach(val => {
    if(!map.has(val)){
      map.set(val, 1)
    }else{
      map.set(val, map.get(val) + 1)
    }
  })
  
  str.forEach(val => {
    if(map.get(val) == 1){
      answer += '('
    }else{
      answer += ')'
    }
  })
  return answer
}