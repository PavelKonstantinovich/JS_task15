import '../css/app.css'

import { Car } from './car'
import { Truck } from './truck'
import { SportCar } from './sportcar';

const car = new Car({
  brand: 'BMW',
  year: 2017,
  fuelRate: 5.5,
  distance: 1000
})
car.getInfo()

const truck = new Truck({
  brand: 'Iveco',
  year: 2019,
  fuelRate: 12,
  maxSlots: 14,
  distance: 3000
})
truck.addCargo(15)
truck.getInfo()

const sportCar = new SportCar({
  brand: 'BMW',
  year: 2020,
  fuelRate: 18,
  maxSpeed: 380,
  distance: 500
})
sportCar.start()
sportCar.speedUp(250)
sportCar.speedUp(38)
sportCar.getInfo()
