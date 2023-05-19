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

// const m1 = new MyMatrix(a)
// console.log(m1.dimension()) // Salida: 2
// console.log(m1.straight()) // Salida: true
// console.log(m1.compute()) // Salida: 21


// const m2 = new MyMatrix(b)
// console.log(m2.dimension()) // Salida: 2
// console.log(m2.straight()) // Salida: false
// console.log(m2.compute()) // Salida: 15


class MyArray {
  constructor(string) {
    this.string = string;
  }

  operation() {
    const regex = /^[+\-*/\(\)\s]+$/; // Expresión regular para validar la operación

    // Comprobar si el texto corresponde a una operación aritmética
    return regex.test(this.string);
  }

  compute() {
    if (!this.operation()) {
      return false; // La operación no es válida
    }

    try {
      const result = eval(this.string); // Evaluar la expresión matemática
      return result;
    } catch (error) {
      return false; // Error al evaluar la expresión
    }
  }
}

// Ejemplo
const s = new MyArray("2 + 3 * (4 - 1)");
console.log(s.operation()); // true
console.log(s.compute()); // 11