export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw TypeError('sqft must be a number');
    }
    const childRef = this.constructor.prototype.evacuationWarningMessage;
    const parentRef = Building.prototype.evacuationWarningMessage;
    if (this.constructor !== Building && childRef === parentRef) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // get set for sqft

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof (newSqft) !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  // instance method

  evacuationWarningMessage() {
    this.l12 = 0;
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
