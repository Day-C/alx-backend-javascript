// create function to read data from a file

const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const listData = data.split('\n');
    // console.log('am here');
    const fields = {};
    // look into data
    for (let i = 1; i < listData.length; i += 1) {
      const dataLine = listData[i].split(',');
      if (dataLine.length === 4) {
        // console.log('how can i help');
        const course = dataLine.slice(-1);
        const firstName = dataLine[0];
        // Insert values to field
        if (fields[course]) {
          const oldCnt = fields[course];
          oldCnt.push(firstName);
          fields[course] = oldCnt;
        } else {
          fields[course] = [firstName];
        }
      }
    }
    // display info about data
    let studentCount = 0;
    // Object.keys() returns an array of objects enumerable propty names
    Object.keys(fields).forEach((key) => {
      const content = fields[key];
      studentCount += content.length;
    });

    console.log(`Number of students: ${studentCount}`);

    Object.keys(fields).forEach((course) => {
      const cont = fields[course];// const stands for content
      const len = cont.length;
      console.log(`Number of students in ${course}: ${len}. List: ${cont.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
