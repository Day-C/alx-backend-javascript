export default class {
  constructor(size, location) {
    if (typeof (size) !== 'number') {
      throw TypeError('size must be a number');
    }
    if (typeof (location) !== 'string') {
      throw TypeError('loaction must be astring');
    }
    this._size = size;
    this._location = location;
  }

  // whenn casted into a string

  toString() {
    return this._location;
  }

  // when casted to a number
  valueOf() {
    return this._size;
  }
}
