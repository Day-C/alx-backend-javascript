export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  // eslint-disable-next-line no-unused-vars, no-shadow
  for (const idx of array) {
    arr.push(appendString + idx);
  }
  return arr;
}
