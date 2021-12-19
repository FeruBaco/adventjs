
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]

console.log(maxProfit(pricesAda))

function maxProfit (prices) {
  let profit = -1
  const pricesCopy = [...prices]

  for (let i = 0; i < prices.length; i++) {
    pricesCopy.shift()
    const actualNum = prices[i]
    for (let j = 0; j < pricesCopy.length; j++) {
      const element = pricesCopy[j]
      if ((element - actualNum) > profit) {
        profit = element - actualNum
      }
    }
  }
  return profit === 0 ? -1 : profit
}
