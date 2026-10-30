
 // TASK 1: ARROW FUNCTIONS

// Convert regular functions to arrow functions
const square = (n) => n * n;

const greet = (name) => "Hello, " + name + "!";

const multiply = (a, b) => a * b;

// Create a function that returns the full name
const getFullName = (firstName, lastName) =>
  `${firstName} ${lastName}`;

// Test the functions
console.log("Square of 5:", square(5));
console.log(greet("Amaka"));
console.log("Multiply 4 by 3:", multiply(4, 3));
console.log(getFullName("Amaka", "Okafor"));



 // TASK 2: DESTRUCTURING

const student = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  city: "Abuja",
};

const scores = [88, 72, 95, 60, 45];

// Destructure name and course
const { name, course } = student;

// Rename age to studentAge
const { age: studentAge } = student;

// Destructure the first two scores
const [firstScore, secondScore] = scores;

console.log("Student name:", name);
console.log("Course:", course);
console.log("Student age:", studentAge);
console.log("First score:", firstScore);
console.log("Second score:", secondScore);



 // TASK 3: SPREAD OPERATOR

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

// Combine both arrays without modifying the originals
const fullStack = [...frontend, ...backend];

console.log("Full Stack:", fullStack);

// Original user profile
const userProfile = {
  username: "coder_ade",
  email: "ade@example.com",
};

// Create a copy with an updated email
const updatedProfile = {
  ...userProfile,
  email: "newemail@example.com",
};

// Log both objects to prove the original is unchanged
console.log("Original profile:", userProfile);
console.log("Updated profile:", updatedProfile);



 // TASK 4: TEMPLATE LITERALS

const personName = "Fatima";
const age = 24;

const intro = `My name is ${personName} and I am ${age} years old.`;

console.log(intro);

// Calculate the area of a rectangle
const width = 8;
const height = 5;

const area = width * height;

console.log(`The area of the rectangle is ${area}`);



 