import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof (floors) !== 'number') {
      throw TypeError('floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  // get and set floors

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof (newFloors) !== 'number') {
      throw TypeError('floors must be a number');
    }
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    this.j2b = 0;
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
