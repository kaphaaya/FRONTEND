// Task 1: Student Profile

let firstName = "Brown";      // let, because it will be reassigned to a nickname
const lastName = "Okafor";    // const, it does not change
let age = 35;                 // let, age can change
const studentId = "STU-00123"; // const, an ID stays the same
const gpa = 3.8;              // const, this value should never change
let isEnrolled = true;        // let, enrollment status can change
let graduationDate = null;    // let, will be set when the student graduates

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

// Reassign firstName to a nickname
firstName = "B";
console.log("Nickname:", firstName);