/*
Solution for:
https://www.codewars.com/kata/549ee8b47111a81214000941/train/javascript
*/
function knight(start, finish) {
  const xMoves = [ 2, 2, -2, -2, 1, 1, -1, -1 ]
  const yMoves = [ -1, 1, 1, -1, 2, -2, 2, -2 ]
  const movesVisted = new Set()

  //saves the initial and end position as a set [row, column]
  let pos = JSON.stringify({ pos: [start.charCodeAt(0) - 97 + 1, Number(start.charAt(1))], dist: 0 })
  let finishStr = JSON.stringify([finish.charCodeAt(0) - 97 + 1, Number(finish.charAt(1))])
  
  //will hold the queue of all visited arrays in JSON format
  const visited = [pos]

  //loop while the array is empty
  while(visited.length){
    //pop the front of the stack and increment number of moves
    let currPositon = visited.shift()
    movesVisted.add(currPositon)
    let {pos, dist} = JSON.parse(currPositon)

    //check if the position equals the target position, if so return number of moves
    if(finishStr == JSON.stringify(pos)){
      return dist
    }

    //otherwise check the next posible set of moves and add them
    for(let i = 0; i < 8; i++){
      if(!isValid(xMoves[i], yMoves[i], pos)){
        let a = [pos[0] + xMoves[i], pos[1] + yMoves[i]]
        let newPosition = JSON.stringify({ pos: a, dist: dist + 1 })

        if(!movesVisted.has(newPosition)){
          visited.push(newPosition)
        }
      }
    }
    console.log('end')
  }
}

function isValid(x, y, position){
  return (position[0] + x) <= 0 || (position[0] + x) > 8 || (position[1] + y) <= 0 || (position[1] + y) > 8
}

console.log(knight('a1', 'f1'))