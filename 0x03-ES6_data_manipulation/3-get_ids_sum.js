/**
 * getStudentIdsSum: function sums up all ids
 * Args: students(list of objects)
 * return: Sum of ids
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, currStudent) => prevStudent.id || prevStudent + currStudent.id, 0,
    );
  }
  return 0;
}
