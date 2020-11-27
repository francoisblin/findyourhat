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
    let position = prompt('Find your hat, which way ?: ')
  }

  success () {
    while (!foundHat)
    for (let i = 0; i < this._field.length; i++) {
      for (let j = 0; j < this._field[i].length; j++) {
        if (this._field[i][j] === hole || this._field[i][j] === -1) {
          console.log(`You lost`)
          foundHat = true
        } else if (this._field[i][j] === hat) {
          console.log('You won')
          foundHat = false
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