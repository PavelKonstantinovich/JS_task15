class Car {
  constructor (props) {
    this.brand = props.brand || ''
    this.year = props.year || 0
    this.fuelRate = props.fuelRate || 0
    this.distance = props.distance || 0
  }

  calcFuel () {
    let consumption = (this.fuelRate * this.distance) / 100
    return consumption
  }

  getInfo () {
    console.log(`Марка автомобиля ${this.brand} год выпуска: ${this.year}   Расход топлива на 100км: ${this.fuelRate}л`)
    console.log(`Расход топлива на ${this.distance}км = ${this.calcFuel()} литров`)
  }
}

export { Car }
