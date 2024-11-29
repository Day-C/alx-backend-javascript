// create function to read data from a file

const fs = require('fs');

function countStudents(file_path) {
  try {
    const data = fs.readFileSync(file_path, 'utf8');
    const list_data = data.split('\n');
    let fields = {};
    // look into data
    for (let i = 1; i < list_data.length; i++) {
      let data_line = list_data[i].split(',');
      if (data_line.length === 4) {
        const course = data_line.slice(-1);
        const first_name = data_line[0];
        // Insert values to field
	if (fields[course]) {
          let old_cnt = fields[course];
          old_cnt.push(first_name)
          fields[course] = old_cnt
        } else {
          fields[course] = [first_name];
	}
      }
    }
    // display info about data
    let student_count = 0
    for (const key in fields) {
      const content = fields[key]
      student_count += content.length;
    }

    console.log("Number of students: " + student_count);

    for (const key in fields) {
      const cont = fields[key];
      const len = cont.length;
      console.log(`Number of students in ${key}. List: ${len}: ${cont.join(', ')}`);
    }
  } catch (err) {
    console.log('Cannot load the database' + err);
  }
}

module.exports = countStudents;
