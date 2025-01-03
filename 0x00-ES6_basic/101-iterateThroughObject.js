export default function iterateThroughObject(reportWithIterator) {
  const names = reportWithIterator;
  let count = 0;
  let display = '';
  // eslint-disable-next-line no-unused-vars, no-shadow
  for (const name of names) {
    count += 1;
    if (count === 1) {
      display += `${name}`;
    } else {
      display += ` | ${name}`;
    }
  }
  return display;
}
