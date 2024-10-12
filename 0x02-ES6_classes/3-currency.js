export default class Currennry {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      throw TypeError('code must be a string');
    }
    if (typeof (name) !== 'string') {
      throw TypeError('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  // get set code
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof (newCode) !== 'string') {
      throw TypeError('code must be a string');
    }
    this._code = newCode;
  }

  // get set name

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw TypeError('name must be a string');
    }
    this._name = newName;
  }

  // intance method

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
