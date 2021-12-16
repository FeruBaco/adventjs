
const letter = 'bici (balón bici coche'

console.log(isValid(letter))

function isValid (letter) {
  if (letter.includes('[' || ']' || '{' || '}')) { return false }
  const emptyRegex = /\(([\s]*)\)/g
  if (letter.match(emptyRegex)) { return false }
  const parenthesesRegex = /\(([A-zÀ-ú]+)\)/g
  if (letter.match(parenthesesRegex)) { return true }
  return false
}
