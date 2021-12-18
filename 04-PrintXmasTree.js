
const height = 5

console.log(createXmasTree(height))

function createXmasTree (height) {
  let tree = ''
  if (height < 1 || height > 100) return 'Invalid height'

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= height - i; j++) {
      tree += '_'
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      tree += '*'
    }
    for (let j = 1; j <= height - i; j++) {
      tree += '_'
    }
    tree += '\n'
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < height - 1; j++) {
      tree += '_'
    }
    tree += '#'
    for (let j = 0; j < height - 1; j++) {
      tree += '_'
    }
    if (i !== 1) { tree += '\n' }
  }
  return tree
}
