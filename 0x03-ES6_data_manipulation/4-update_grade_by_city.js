/**
 * updateStudentGradeByCity: update student based on city
 * Agrs: student(List of student onjects).
 *     : city(string describing user location).
 *     : newGrades(list of grade objects) format {studentId, grade}.
 * Retur: list of students of specied city.
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defGrade).grade,
      }));
  }
  return [];
}

