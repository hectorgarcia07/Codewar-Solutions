function descendingOrder(n){
  let numToArr = n.toString().split('')
  numToArr.sort((a, b) =>  b - a)

  return Number(numToArr.join(''))
}

console.log(descendingOrder(123456789))