/**
 * createInt8TypedArrayL retua a new arrayBuffer wit Int8 value as a specific position
 * Args: length(number representing length of buffer;
 *     :poosition(number) position to be modified
 *     :value) hold the new value
 *Return: DataView object
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
