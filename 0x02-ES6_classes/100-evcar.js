import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  cloneCar() {
    const Specie = super.constructor[Symbol.species];

    return new Specie();
  }
}
