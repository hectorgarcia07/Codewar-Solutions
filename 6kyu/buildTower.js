/*
Answer for
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
*/
function towerBuilder(nFloors) {
  let tower = []
  let totalStars = nFloors + nFloors - 1//calculate total stars
  for(let i = 1; i <= nFloors; i++){
    let str = ''
    let currStars = i + i - 1
    let totalSpaces = (totalStars - currStars) / 2 
    tower.push(' '.repeat(totalSpaces) + '*'.repeat(currStars) + ' '.repeat(totalSpaces))
  }
  return tower
}