export default function returnHowManyArguments(...args) {
  let count = 0;
  for (var i of args) {
    count += 1;
  }
  return count;
}
