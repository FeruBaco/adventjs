console.log(wrapGifts(['📷', '⚽️']))
console.log(wrapGifts(['🏈🎸', '🎮🧸']))
console.log(wrapGifts(['📷']))

function wrapGifts (gifts) {
  if (gifts.length === 0) { return [] }
  const wrappedGifts = []
  const elementsLength = gifts[0].length + 2
  const topBot = () => {
    let line = ''
    while (line.length < elementsLength) {
      line += '*'
    }
    wrappedGifts.push(line)
  }
  topBot()
  for (let i = 0; i < gifts.length; i++) {
    const element = gifts[i]
    const wrapEl = `*${element}*`
    wrappedGifts.push(wrapEl)
  }
  topBot()
  return wrappedGifts
}
