const prompt = require('prompt-sync')({sigint: true});

const hat = '^'
const hole = 'O'
const fieldCharacter = '░'
const pathCharacter = '*'
let foundHat = false
let x = 0
let y = 0 

class Field {
  constructor(field) {
    this._field = field
  }

  get field () {
    return this._field
  }

  print () {
    console.log(this._field.join('\n').replace(/,/g, ""))
    this.input()
  }

  input () {
    let input = prompt('Find your hat, which way ? u, d, r, l: ')
    let coordonates = this.position(input)
    this.success(coordonates)
  }

  position (input) {
    if (input === 'r') {
      y += 1
    } else if (input === 'l') {
      y -= 1
    } else if (input === 'd') {
      x += 1
    } else if (input === 'u') {
      x -= 1
    } else {
      console.log('Please enter u, d, r or l')
    }
    return [x, y]
  }

  success (coordonates) {
    let a = coordonates[0]
    let b = coordonates[1]
    while (!foundHat) {
      if (a === -1 || b === -1 || this._field[a][b] === hole) {
        console.log('You lost')
        foundHat = true
      } else if (this._field[a][b] === hat) {
        console.log('You won!')
        foundHat = true
      } else {
        this._field[a][b] = '*'
        console.log('Continue')
        console.log(this._field.join('\n').replace(/,/g, ""))
        this.input()
      }
    }
  }
}
  


const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░']
]);

myField.print()