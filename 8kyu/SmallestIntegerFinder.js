/*
solution for:
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((prev, current) => prev > current ? current : prev)
  }
}