// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Akanksha";

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: string[];

hobbies = ["Good Times", "Cooking"];

// Type alias

type Person = {
  names: string;
  age: number;
};

// let person: {
//   name: string;
//   age: number;
// };

let person: Person;
person = {
  names: "Deokumar",
  age: 20,
};

person = { names: "Akanksha", age: 20 };

// person = { name: 12, age: "20" };

// let people: {
//   name: string;
//   age: number;
// }[];

let people: Person[];

// Type inference

let course = "React - The Complete Guide";

// course = 1212;

// Union Types

let types: string | number | boolean | Date = "Akanksha";

types = 12121;

// Function & types
function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["demoArray"], "1");
// updatedArray[0].split("");
