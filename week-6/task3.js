// Task 3: Type Conversion

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// parseInt() because age is a whole number and we want to drop any decimals
studentAge = parseInt(studentAge);
console.log("studentAge:", typeof studentAge, studentAge);

// parseFloat() because the score has a decimal point
examScore = parseFloat(examScore);
console.log("examScore:", typeof examScore, examScore);

// Number() because it converts the whole string to a number (works for ints and decimals)
passMark = Number(passMark);
console.log("passMark:", typeof passMark, passMark);

// String() because the name needs to be text, not a number
studentName = String(studentName);
console.log("studentName:", typeof studentName, studentName);

console.log("Did the student pass?", examScore > passMark); // true