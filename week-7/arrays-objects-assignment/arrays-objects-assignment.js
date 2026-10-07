// ============================================
// QUESTION 1: CREATE STUDENT OBJECTS
// ============================================

// Created an array containing 5 student objects.
// Each student has an id, name, age, and grades array.
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

console.log("========== QUESTION 1 ==========");
console.log("Students:");
console.log(students);


// ============================================
// QUESTION 2: CALCULATE AVERAGES
// ============================================

// Calculated the average of an array of grades.
// reduce() is used to calculate the total.
// toFixed(2) rounds the result to 2 decimal places.
// Number() converts the result back to a number.
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  return Number(average.toFixed(2));
}

// Use map() to create a new array.
// The spread operator copies each student object,
// so the original students array is not mutated.
const studentsWithAverage = students.map((student) => {
  return {
    ...student,
    average: calculateAverage(student.grades),
  };
});

console.log("========== QUESTION 2 ==========");
console.log("Students with averages:");
console.log(studentsWithAverage);


// ============================================
// QUESTION 3: FILTER PASSING STUDENTS
// ============================================

// Return only students whose average is 60 or higher.
// filter() creates a new array containing only
// students that meet the condition.
function getPassingStudents(students) {
  return students.filter((student) => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);

console.log("========== QUESTION 3 ==========");
console.log("Passing students:");
console.log(passing);


// ============================================
// QUESTION 4: FUNCTIONS & CALLBACKS
// ============================================

// processStudents accepts a students array and
// a callback function.
// map() applies the callback to every student.
function processStudents(students, callback) {
  return students.map((student) => callback(student));
}


// --------------------------------------------
// Callback 1: ADD LETTER GRADE
// --------------------------------------------

// Add a letter grade based on the student's average.
// The spread operator ensures the original object
// is not modified.
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
    letterGrade: letterGrade,
  };
}


// --------------------------------------------
// Callback 2: ADD STATUS
// --------------------------------------------

// Add Pass if the average is 60 or higher.
// Otherwise add Fail.
function addStatus(student) {
  const status = student.average >= 60 ? "Pass" : "Fail";

  return {
    ...student,
    status: status,
  };
}


// Process students using addLetterGrade callback.
const studentsWithGrades = processStudents(
  studentsWithAverage,
  addLetterGrade
);

console.log("========== QUESTION 4A ==========");
console.log("Students with letter grades:");
console.log(studentsWithGrades);


// Process students using addStatus callback.
const studentsWithStatus = processStudents(
  studentsWithAverage,
  addStatus
);

console.log("========== QUESTION 4B ==========");
console.log("Students with status:");
console.log(studentsWithStatus);


// ============================================
// ADDITIONAL TESTING
// ============================================

console.log("========== TESTING ==========");

// Test calculateAverage directly.
console.log(
  "Average of [85, 92, 78]:",
  calculateAverage([85, 92, 78])
);

// Test number of students.
console.log("Number of students:", students.length);

// Test passing students.
console.log(
  "Number of passing students:",
  passing.length
);

// Verify the original students were not mutated.
console.log(
  "Original student has average property:",
  students[0].average
);

console.log(
  "Original student has letterGrade property:",
  students[0].letterGrade
);

console.log(
  "Original student has status property:",
  students[0].status
);
