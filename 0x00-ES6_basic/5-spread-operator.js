export default function concatArrays(array1, array2, string) {
  // use the spread operator to return a single list of all functions argument characters
  const sprd = [...array1, ...array2, ...string];
  return sprd;
}
