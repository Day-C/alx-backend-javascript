const assert = require('assert');
const calculateNumbers = require('./0-calcul')
const mocha = require('mocha');

describe("Addition Function", () => {
  it("should add 2 numbers correctly'", () => {
    assert.strictEqual(calculateNumbers(1, 2), 3);
    assert.strictEqual(calculateNumbers(2, 3), 5);
    assert.strictEqual(calculateNumbers(-3, 1), -2);
  });

  it("should round all decimal numbers", () => {
    assert.strictEqual(calculateNumbers(1, 2.8), 3);
    assert.strictEqual(calculateNumbers(1.2, 2.1), 3);
    assert.strictEqual(calculateNumbers(5.6, 2.3), 9);
    assert.strictEqual(calculateNumbers(2.3, -1.1), 1);
  });

  it('should return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumbers(2), 2);
    assert.strictEqual(calculateNumbers(2.7), 3);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumbers(true, '3'), 4);
    assert.strictEqual(calculateNumbers(1, '3.7'), 5);
    assert.strictEqual(calculateNumbers('1.2', 3.7), 5);
  });

  it('should throw typeerror if either arg cannot be convered to a number', () => {
    assert.throws(() => calculateNumbers('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumbers(1.2, 'dog'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
})
});
