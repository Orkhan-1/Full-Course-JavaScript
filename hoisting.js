console.log(greeting); // Output: undefined
var greeting = "Hello, world!";

// How it works

var greeting;
console.log(greeting); // undefined
greeting = "Hello, world!";

//JavaScript hoists variable declarations to the top of their scope.
// But only the declaration (var greeting), not the initialization (= "Hello, world!")
