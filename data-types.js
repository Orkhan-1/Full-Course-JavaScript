// JavaScript has dynamic types - the same variable can hold different data types

// ===== JavaScript Data Types =====
// Primitive Types
// ---------------------------------

// 1. String
let username = "Alice";
let greeting = 'Hello World!';

// 2. Number (integers and decimals)
let userAge = 25;
let temperature = 36.6;
let billion = 1e9; // 1000000000

// 3. Boolean
let isOnline = true;
let hasPermission = false;

// 4. Undefined
let notAssigned; // undefined
let explicitlyUndefined = undefined;

// 5. Null
let empty = null;

// 6. BigInt (append 'n')
let bigNumber = 1234567890123456789012345678901234567890n;

// 7. Symbol
let uniqueId = Symbol("uniqueIdentifier");

// Non-Primitive Types
// ---------------------------------

// 1. Object
let person = {
  firstName: "Orkhan",
  lastName: "Gasanov",
  age: 30
};

// 2. Array
let colors = ["red", "green", "blue"];

// 3. Function
function sayHello() {
  console.log("Hello there!");
}

// Type Checking
// ---------------------------------
console.log("Type Examples:");
console.log(typeof username);          // "string"
console.log(typeof userAge);           // "number"
console.log(typeof isOnline);          // "boolean"
console.log(typeof notAssigned);       // "undefined"
console.log(typeof empty);             // "object" (known JS bug)
console.log(typeof hugeNumber);        // "bigint"
console.log(typeof uniqueId);          // "symbol"
console.log(typeof person);            // "object"
console.log(typeof colors);            // "object"
console.log(typeof sayHello);          // "function"
console.log(typeof notANumber);        // "number" (NaN is technically a number)
console.log(typeof infinity);          // "number"