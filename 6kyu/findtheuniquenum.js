/*
Solution for: 
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
*/
function findUniq(arr) {
  let mapOfVals = new Map()
  
  //for each value in the array, if it doesn't exist in the map add it and increment inital
  //value by one
  //otherwise, increment the value
  arr.forEach( val => 
    mapOfVals.has(val) ? mapOfVals.set(val, mapOfVals.get(val) +1) : mapOfVals.set(val, 1)
  )
  console.log(arr, mapOfVals)
  
  //there should be only 1 unique number that has a value of 1
  for(let [key, value] of mapOfVals){
    if(value === 1){
      return key
    }
  }
}
