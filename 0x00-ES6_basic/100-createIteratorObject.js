export default function createIteratorObject(report) {
  const obj = report;
  let employees = [];
  for (let key in report.allEmployees) {
    let names = [...report.allEmployees[key]];
    for (let name of names) {
      employees.push(name)
    }
  }
  return employees;
}
