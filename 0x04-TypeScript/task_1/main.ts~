interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
   firstName: 'Grace';
   lastName: 'Ashley';
   age: 30;
   location: 'kaneshie'
}

const student2: Student = {
   firstName: 'Elizabeth';
   lastName: 'Conte';
   age: 30;
   location: 'kaneshie'
}

const studentList: Student[] = [student1, student2]

const table = document.createElement('table');
document.body.appendChild(table);

studentList.forEach(student => {
	const row = table.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);

	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});
