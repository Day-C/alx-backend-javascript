// create a function that reads asynchronously

const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const dataList = data.split('\n');
      //  console.log(data_list);
      const fields = {};
      let studentCount = 0;
      for (let i = 1; i < dataList.length; i += 1) {
        const dataLine = dataList[i].split(',');
        if (dataLine.length === 4) {
          const course = dataLine.slice(-1);
          const firstName = dataLine[0];
          if (fields[course]) {
            const students = fields[course];
            students.push(firstName);
            fields[course] = students;
            studentCount += 1;
          } else {
            fields[course] = [firstName];
            studentCount += 1;
          }
        }
      }
      const ans = {}
      let i = 1;
      ans[i] = `Number of students: ${studentCount}`;
      Object.keys(fields).forEach((course) => {
        i += 1;
        const content = fields[course];
        const contLen = content.length;
        ans[i] = `Number of students in ${course}: ${contLen}. List: ${content.join(', ')}`;
      });
      resolve(ans);
    }
  });
});

module.exports = countStudents;
