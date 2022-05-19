/*
Solution for
https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
*/
function friend(friends){
  return friends.reduce((friendArr, curr) => {
    if(curr.length == 4){
      friendArr.push(curr)
    }
    return friendArr
  }, [])
}