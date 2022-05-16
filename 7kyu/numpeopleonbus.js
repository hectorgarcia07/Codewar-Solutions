/*
This is the solution for:
https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
*/
var number = function(busStops){
  return busStops.reduce((total, prev) => total += prev[0] - prev[1], 0)
}