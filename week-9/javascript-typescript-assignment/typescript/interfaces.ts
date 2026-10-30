
 // TASK 3: OBJECTS AND INTERFACES

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const studentOne: Student = {
  id: 1,
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  isActive: true,
};

const studentTwo: Student = {
  id: 2,
  name: "Tunde",
  age: 21,
  course: "Cloud Engineering",
  isActive: true,
};

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructorOne: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"],
};

console.log("Student One:", studentOne);
console.log("Student Two:", studentTwo);
console.log(introduceInstructor(instructorOne));
