
console.log(getCoins(51))
console.log(getCoins(3))
console.log(getCoins(5))
console.log(getCoins(16))
console.log(getCoins(100))

function getCoins (change) {
  const changes = new Map()
  changes.set(1, 0)
  changes.set(2, 0)
  changes.set(5, 0)
  changes.set(10, 0)
  changes.set(20, 0)
  changes.set(50, 0)

  while (change !== 0) {
    if ((change - 50) >= 0) {
      change -= 50
      changes.set(50, changes.get(50) + 1)
      continue
    }
    if ((change - 20) >= 0) {
      change -= 20
      changes.set(20, changes.get(20) + 1)
      continue
    }
    if ((change - 10) >= 0) {
      change -= 10
      changes.set(10, changes.get(10) + 1)
      continue
    }
    if ((change - 5) >= 0) {
      change -= 5
      changes.set(5, changes.get(5) + 1)
      continue
    }
    if ((change - 2) >= 0) {
      change -= 2
      changes.set(2, changes.get(2) + 1)
      continue
    }
    if ((change - 1) >= 0) {
      change -= 1
      changes.set(1, changes.get(1) + 1)
      continue
    }
  }
  return Array.from(changes, ([name, val]) => (val))
}
