// Task 4: Grading System

// Previous runs (commented out so all are visible)
// let score = 73;  // Score: 73 | Grade: A — Distinction
// let score = 55;  // Score: 55 | Grade: C — Pass
let score = 32;     // Score: 32 | Grade: F — Fail

let grade;

if (score >= 70) {
  grade = "A — Distinction";
} else if (score >= 60) {
  grade = "B — Merit";
} else if (score >= 50) {
  grade = "C — Pass";
} else if (score >= 40) {
  grade = "D — Near Pass";
} else {
  grade = "F — Fail";
}

console.log(`Score: ${score} | Grade: ${grade}`);