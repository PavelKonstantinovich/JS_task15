import { Car } from './car'

class Truck extends Car {
  cargoCabin = []

  constructor (props) {
    super(props)
    this.maxSlots = props.maxSlots || 1
  }

  addCargo (item) {
    if (this.cargoCabin < this.maxSlots) {
      this.cargoCabin.push(item)
    } else {
      const error = new Error(`${this.brand} загружен.`)
      console.error(error)
    }
  }

  getInfo () {
    super.getInfo()
    console.log(`Вместительность ${this.maxSlots}`)
    this.addCargo()
  }
}

export { Truck }
