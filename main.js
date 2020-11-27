const prompt = require('prompt-sync')({sigint: true});

const hat = '^'
const hole = 'O'
const fieldCharacter = '░'
const pathCharacter = '*'
let foundHat = false

class Field {
  constructor(field) {
    this._field = field
  }

  get field () {
    return this._field
  }

  print () {
    console.log(this._field.join('\n').replace(/,/g, ""))
    // this.input()
    this.success()
  }

  input () {
    let input = prompt('Find your hat, which way ? u, d, r, l: ')
  }

  position (input) {
    let x = 0
    let y = 0
    let playerPosition = [x][y]
    if (input = 'r') {
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
    return playerPosition
  }

  success () {
    while (!foundHat) {
      for (let i = 0; i < this._field.length; i++) {
        for (let j = 0; j < this._field[i].length; j++) {
          if (this._field[i][j] === hole || this._field[i][j] === -1) {
            console.log(`You lost`)
            foundHat = true
          } else if (this._field[i][j] === hat) {
            console.log('You won')
            foundHat = true
          } else {
            console.log('Continue')
          }
        }
      }
    }
  }
}

const myField = new Field([
  ['*', '░', 'O', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print()