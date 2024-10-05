export default function createIteratorObject(report) {
  let obj = report;
  let employees = [];
  for (let key in report.allEmployees) {
    const names = [...report.allEmployees[key]];
    for (let name of names) {
      employees.push(name);
    }
  }
  return employees;
}
