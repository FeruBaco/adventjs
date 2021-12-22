
// console.log(getMinJump([5, 3, 6, 7, 9]))
// console.log(getMinJump([2, 4, 6, 8, 10]))
console.log(getMinJump([1, 2, 3, 5])) // -> 4)
console.log(getMinJump([3, 7, 5])) // -> 2)
console.log(getMinJump([9, 5, 1])) // -> 2)

function getMinJump (obstacles) {
  let length = 1
  let lengthCache = 0
  let counter = 0
  while (counter !== obstacles.length) {
    if (!obstacles.includes(lengthCache)) {
      lengthCache += length
      counter++
    } else {
      length++
      lengthCache = 0
      counter = 0
    }
    if (obstacles.includes(lengthCache)) {
      length++
      lengthCache = 0
      counter = 0
    }
  }
  return length
}
