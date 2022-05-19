/*
Solution to 
https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
*/
function order(words){
  //split the str into an array
  let objArr = words.split(' ')
  
  //find each number in the string
  //and compare a < b
  objArr.sort((a,b) => {
    let numA = Number(a.match(/\d/)[0])
    let numB = Number(b.match(/\d/)[0])
    return numA - numB
  })
  //convert array to string and join it
  return objArr.join(' ')
}