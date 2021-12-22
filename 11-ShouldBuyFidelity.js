
console.log(shouldBuyFidelity(0))
console.log(shouldBuyFidelity(1))
console.log(shouldBuyFidelity(100))

function shouldBuyFidelity (times) {
  const normalTicket = times * 12
  let fidelityCard = 250
  let lastTicketPrice = 12 * 0.75
  for (let i = 0; i < times; i++) {
    fidelityCard += lastTicketPrice
    lastTicketPrice *= 0.75
  }
  if (normalTicket > fidelityCard) { return true }
  return false
}
