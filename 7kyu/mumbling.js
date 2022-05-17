/*
This a solution to problem:
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
*/
function accum(s) {
  let str = ''
  
  for(let i = 0, len = s.length; i < len; i++){
    if(i === 0){
      str += `${s[i].toUpperCase()}`
    }
    else{
      str += `-${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}`
    }
  }
  return str
}