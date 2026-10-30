
 // TASK 4: ARRAYS AND UNION TYPES

let names: string[] = ["Ada", "Bola", "Chidi"];

let scores: number[] = [78, 90, 55, 88];

function formatId(id: string | number): string {
  return String(id);
}

// Test examples
console.log("Names:", names);
console.log("Scores:", scores);
console.log("Numeric ID:", formatId(42));
console.log("String ID:", formatId("abc"));

export {};
