// Create the first interface

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let stident1: Student = {};
let student2: Student = {};

let studentsList: Student[] = [student1, student2];


/* use vnilla js to render table for each element in studentsList*/

// create a table  element

const table = document.createElement('table');
const header = document.createElement('tr');
cont headers = ['firstName', 'location']

// create table header and give it names
headers.forEach(elem => {
  const th = document.createElement('th');
  th.textContent = elem;
  header.appendChild(th);
})
// add the tr to the table
table.appendChild(header);

// insert data rows
studentsList.forEach(student => {
  // create a table row
  const tr = document.createElement('tr');
  // create talbe data cells
  const cell_1 = document.createElement('td');
  const cell_2 = document.createElement('td');
  // populate the data cells
  cell_1.textContent = student.firstName;
  cell_2.tesxtContent = student.loation;
  add cells to row
  tr.appendChild(cell_1);
  tr.appendChild(cell_2);
  // add row  to table
  table.appendChild(tr)
});

document.doby.appendChild(table);
