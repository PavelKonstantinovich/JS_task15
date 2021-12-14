import { Car } from './car'

class Truck extends Car {

  constructor (props) {
    super(props)
    this.maxSlots = props.maxSlots || 1
    this.cargo = props.cargo || 1
  }

  addCargo () {
    if (this.cargo <= this.maxSlots) {
      console.log(`В ${this.brand} груз поместился без остатка`)
    } else {
      const extra = this.cargo - this.maxSlots
      console.warn(`${this.brand} загружен. На складе остается ${extra} палета`)
    }
  }

  getInfo () {
    super.getInfo()
    console.log(`Вместительность ${this.maxSlots}`)
    this.addCargo()
  }
}

export { Truck }
