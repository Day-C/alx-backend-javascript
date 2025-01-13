export default function createReportObject(employeeslist) {
  const obj = {
    allEmployees: employeeslist,
    // eslint-disable-next-line no-shadow
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return obj;
}
