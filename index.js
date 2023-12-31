// Simulated student data
const students = [
  { id: 1, name: "Ram", roomNumber: 101 },
  { id: 2, name: "Shyam", roomNumber: 102 },
  { id: 3, name: "Geeta", roomNumber: 103 }
];

// Function to populate student data into the table
function displayStudents() {
  const studentTable = document.getElementById("studentData");
  studentTable.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.roomNumber}</td>
    `;
    studentTable.appendChild(row);
  });
}

// Call the displayStudents function to populate the table on page load
displayStudents();
