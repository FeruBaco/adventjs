
const letter = 'bici coche balón _playstation bici coche    peluche'

console.log(listGifts(letter))

function listGifts (letter) {
  const gifts = {}

  letter = letter.replace(/\s+/g, ' ').trim()
  const separateList = letter.split(' ')

  separateList.map((el) => {
    if (el.includes('_')) { return false }

    if ((el in gifts)) {
      gifts[el] += 1
    } else {
      gifts[el] = 1
    }
    return true
  })

  return gifts
}
