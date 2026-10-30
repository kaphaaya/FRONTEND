
 // TASK 2: TYPED FUNCTIONS

function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getArea(width: number, height: number): number {
  return width * height;
}

// Test examples
console.log("Sum:", addNumbers(10, 20));
console.log("Is adult:", isAdult(21));
console.log("Rectangle area:", getArea(8, 5));
