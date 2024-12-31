/**
 * getStudentsByLocation: function filters students based on location.
 * Args: Students(list)- A list of student objects.
 *     : city(sting)-location to filter by.
 * Return: list of students from specific location
 */

export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
