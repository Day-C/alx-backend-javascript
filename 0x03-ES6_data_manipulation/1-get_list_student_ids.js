/**
 * Retieve ids of student from a list of student objects.
 * args: students - list of student objects
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
