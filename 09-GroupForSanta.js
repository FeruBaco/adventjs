
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
// console.log(groupBy([{ age: 23 }, { age: 24 }], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }

function groupBy (collection, it) {
  const groups = {}
  if (typeof it === 'function') {
    collection.map(it).forEach((v, i) => {
      const values = (groups[v]) ? groups[v] : []
      groups[v] = [...values, collection[i]]
    })
    return groups
  }
  if (typeof it === 'string') {
    collection.map(val => val[it]).forEach((v, i) => {
      const values = (groups[v]) ? groups[v] : []
      groups[v] = [...values, collection[i]]
    })
    return groups
  }
}
