// create a function that reads asynchronously

const fs = require('fs');

async function countStudents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('Cannot load the database');
    } else {
      const data_list = data.split('\n');
      //  console.log(data_list);
      let fields = {}
      let studentCount = 0
      for (let i = 1; i < data_list.length; i++) {
        data_line = data_list[i].split(',');
	if (data_line.length === 4) {
          const course = data_line.slice(-1);
          const firstName = data_line[1];
          if (fields[course]) {
            let students = fields[course];
            students.push(firstName);
            fields[course] = students;
            studentCount += 1;
          } else {
            fields[course] = [firstName]
            studentCount += 1;
          }
        }
      }
      console.log(`Number of students: ${studentCount}`);
      for (key in fields) {
	const content = fields[key]
	const contLen = content.length
        console.log(`Number of students in ${key}: ${contLen}. list: ${content.join(', ')}`);
        
      }
    }
  });
}

module.exports = countStudents;
