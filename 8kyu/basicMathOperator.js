/*
Solution for problem
https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript
*/
function basicOp(operation, value1, value2)
{
  return eval(`${value1} ${operation} ${value2}`)
}