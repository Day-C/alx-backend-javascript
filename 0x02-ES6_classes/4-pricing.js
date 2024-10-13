import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw TypeError('amount must be a number');
    }
    if (currency instanceof Currency === false) {
      throw TypeError('currenty must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // get and set for amount

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof (newAmount) !== 'number') {
      throw TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }
  // get set for currency

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency === false) {
      throw TypeError('currenty must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // instance methods

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
