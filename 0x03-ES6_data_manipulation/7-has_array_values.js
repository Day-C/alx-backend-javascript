/**
 * check if a set contains an element that exists in an array
 * Args: set(a Set)
 *     : array(a list)
 * Return: boolean
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
