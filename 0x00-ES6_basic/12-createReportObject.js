export default function createReportObject(employeeslist) {
  const obj = {
    allEmployees: employeeslist,
    getNumberOfDepartments: function(employeeslist) {
      const empObj = employeeslist;
      let count = 0;
      for (let key in empObj) {
        count += 1;
      }
      return count;
    }
  }
  return obj;
}
