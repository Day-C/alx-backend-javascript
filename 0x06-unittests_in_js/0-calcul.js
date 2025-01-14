// a siple function to make some calculations

function calculateNumber(a, b = 0) {
  const _a = Number(a);
  const _b = Number(b);

  if (Number.isNaN(_a) || Number.isNaN(_b)) {
    throw TypeError('Parameters must be numbers');
  }
  return Math.round(_a) + Math.round(_b);
}
module.exports = calculateNumber;
