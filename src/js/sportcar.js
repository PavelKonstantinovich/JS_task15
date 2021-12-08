import { Car } from './car'

class SportCar extends Car {
  currentSpeed = 0
  isWorking = false

  constructor (props) {
    super(props)
    this.maxSpeed = props.maxSpeed || 100
  }

  start () {
    this.isWorking = true
  }

  stop () {
    this.isWorking = false
  }

  speedUp (value) {
    if (!this.isWorking) {
      console.warn('Запусти двигатель!')
      return
    }

    const currentSpeed = this.currentSpeed + value
    console.log(`Текущая скорость ${this.currentSpeed}`)
    if (currentSpeed >= this.maxSpeed) {
      const message = new Error(`Текущая скорость ${this.currentSpeed} не может быть больше чем ${this.maxSpeed}`)
      console.error(message)
      return
    }

    this.currentSpeed += value
  }

  getInfo () {
    this.speedUp()
    super.getInfo()
    console.log(`Максимальная скорость ${this.maxSpeed}`)
  }
}

export { SportCar }
