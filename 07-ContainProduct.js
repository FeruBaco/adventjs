
const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite'
    }
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta' // <- ¡Está aquí!
    }
  }
}

console.log(contains(almacen, 'camiseta'))

function contains (warehouse, product) {
  const values = Object.values(warehouse)
  for (let i = 0; i < values.length; i++) {
    const element = values[i]
    if (typeof element === 'string' && element === product) {
      return true
    }
    if (typeof element === 'object') {
      const inside = contains(element, product)
      if (inside) return inside
    }
  }
  return false
}
