class MyMatrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  dimension() {
    const getDimension = arr => {
      if (Array.isArray(arr)) {
        return 1 + getDimension(arr[0])
      } else {
        return 0
      }
    }

    return getDimension(this.matrix)
  }

  straight() {
    const isUniform = (arr, depth) => {
      if (depth === 0) {
        return true
      } else if (Array.isArray(arr)) {
        return (
          arr.every(subArr => isUniform(subArr, depth - 1)) &&
          arr.length === arr[0].length
        )
      } else {
        return false
      }
    }

    return isUniform(this.matrix, this.dimension() - 1)
  }

  compute() {
    const computeSum = arr => {
      // usamos reduce para hacer el calculo
      if (Array.isArray(arr)) {
        return arr.reduce((sum, subArr) => sum + computeSum(subArr), 0)
      } else {
        return arr
      }
    }

    return computeSum(this.matrix)
  }
}

const a = [1, 2]
const b = [
  [1, 2],
  [2, 4],
]
const c = [
  [1, 2],
  [2, 4],
  [2, 4],
]
const d = [
  [
    [3, 4],
    [6, 5],
  ],
]
const e = [
  [[1, 2, 3]],
  [
    [5, 6, 7],
    [5, 4, 3],
  ],
  [
    [3, 5, 6],
    [4, 8, 3],
    [2, 3],
  ],
]
const f = [
  [
    [1, 2, 3],
    [2, 3, 4],
  ],
  [
    [5, 6, 7],
    [5, 4, 3],
  ],
  [
    [3, 5, 6],
    [4, 8, 3],
  ],
]

const ejemplo1 = new MyMatrix(a)
console.log('La dimension es: ', ejemplo1.dimension())
console.log('is straight?: ', ejemplo1.straight())
console.log('Calculo: ', ejemplo1.compute())

const ejemplo2 = new MyMatrix(e)
console.log('La dimension es: ', ejemplo2.dimension())
console.log('is straight?: ', ejemplo2.straight())
console.log('Calculo: ', ejemplo2.compute())

class MyArray {
  constructor(string) {
    this.string = string
  }

  operation() {
    const regex = /^[+\-*/\(\)\s]+$/ // Expresión regular para validar la operación

    // Comprobar si el texto corresponde a una operacion
    return regex.test(this.string)
  }

  compute() {
    if (!this.operation()) {
      return false // La operación no es valida
    }

    try {
      const result = eval(this.string) // Evaluar la exprecion
      return result
    } catch (error) {
      return false
    }
  }
}

const a2 = 'Hello world'
const b2 = '2 + 10 / 2 - 20'
const c2 = '(2 + 10) / 2 - 20'
const d2 = '(2 + 10 / 2 - 20'

const ejemplo3 = new MyArray(d2)
console.log('Es una operacion?: ', ejemplo3.operation()) // false
console.log('Calculo: ', ejemplo3.compute()) // false
