/*
Solution for: 
https://www.codewars.com/kata/55f2b110f61eb01779000053
*/
function getSum( a,b )
{
  if (a === b){
    return a
  }
  let total = 0
  let min = Math.min(a,b)
  let max = Math.max(a,b)
  
  for(; min <= max; min++){
    total += min
  }
  return total
}