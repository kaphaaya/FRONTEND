```javascript
// Week 7 - Arrays and Objects Assignment

// QUESTION 1
// Create an array of students
const students = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grades: [85, 92, 78],
  },
  {
    id: 2,
    name: "Brian Smith",
    age: 21,
    grades: [72, 68, 75],
  },
  {
    id: 3,
    name: "Cynthia Brown",
    age: 19,
    grades: [95, 91, 94],
  },
  {
    id: 4,
    name: "David Williams",
    age: 22,
    grades: [55, 62, 58],
  },
  {
    id: 5,
    name: "Emma Davis",
    age: 20,
    grades: [45, 52, 48],
  },
];

console.log("QUESTION 1 - Students");
console.log(students);


// QUESTION 2
// Calculate the average of the grades
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return Number((total / grades.length).toFixed(2));
}

// Add the average to each student
const studentsWithAverage = students.map((student) => {
  return {
    ...student,
    average: calculateAverage(student.grades),
  };
});

console.log("QUESTION 2 - Students with averages");
console.log(studentsWithAverage);


// QUESTION 3
// Get students with an average of 60 or above
function getPassingStudents(students) {
  return students.filter((student) => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log("QUESTION 3 - Passing students");
console.log(passing);


// QUESTION 4
// Use a callback to process each student
function processStudents(students, callback) {
  return students.map((student) => callback(student));
}


// Add a letter grade based on the average
function addLetterGrade(student) {
  let letterGrade;

  if (student.average >= 90) {
    letterGrade = "A";
  } else if (student.average >= 80) {
    letterGrade = "B";
  } else if (student.average >= 70) {
    letterGrade = "C";
  } else if (student.average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade,
  };
}


// Add Pass or Fail status
function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? "Pass" : "Fail",
  };
}


// Test the letter grade callback
const studentsWithGrades = processStudents(
  studentsWithAverage,
  addLetterGrade
);

console.log("QUESTION 4A - Letter grades");
console.log(studentsWithGrades);


// Test the status callback
const studentsWithStatus = processStudents(
  studentsWithAverage,
  addStatus
);

console.log("QUESTION 4B - Student status");
console.log(studentsWithStatus);


// TESTING

console.log("TESTING");

console.log("Average test:", calculateAverage([85, 92, 78]));

console.log("Number of students:", students.length);

console.log("Number of passing students:", passing.length);

// Check that the original students were not changed
console.log(
  "Original student average:",
  students[0].average
);

console.log(
  "Original student letter grade:",
  students[0].letterGrade
);

console.log(
  "Original student status:",
  students[0].status
);
```