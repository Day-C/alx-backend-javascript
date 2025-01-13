export default function returnHowManyArguments(...args) {
  let count = 0;
  // eslint-disable-next-line no-unused-vars, no-shadow
  Object.keys(args).forEach((arg) => {
    count += 1;
  });
  return count;
}
