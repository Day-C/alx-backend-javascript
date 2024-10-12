export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof(name) === String) {
      this._name = name;
    }
    if (typeof(length) === Number) {
      this._length = length;
    }
    if (Array.isArray(students) && students.every(String)) {
      this._students = students;
    }
  }

  // name
  get courseName() {
    return this._name;
  }

  set cousreName(newName) {
    if (typeof(newName) === String) {
      this._name = newName;
    }
  }

  // length
  get courseLenght() {
    return this._length;
  }

  set courseLength(newLength) {
    if (typeof(newLength) === Number) {
      this._length = newLength;
    }
  }

  // Students

  get studentsAtt() {
    return this._students;
  }

  set studentsAtt(newStuddents) {
    if (Array.isArray(newStudents) && newStudents.every(String)) {
      this._students = newStudents
    }
  }
}
