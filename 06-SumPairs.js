
console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]

function sumPairs (nums, res) {
  for (let i = 0; i <= nums.length; i++) {
    const newArray = [...nums]
    newArray.splice(i, 1)
    for (let j = 0; j <= newArray.length; j++) {
      if (nums[i] + newArray[j] === res) {
        return [nums[i], newArray[j]]
      }
    }
  }
  return null
}
