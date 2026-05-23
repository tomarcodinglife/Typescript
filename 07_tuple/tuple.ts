
var myUserG:[string, number] = ["Sujit", 27];
var myUserG2:[string, number, boolean, number] = ["Sujit", 27, true, 100000];

// Readonly tuple
var myUserG3: readonly [string, number] = ["Sujit", 27];

// Accessing tuple elements
console.log(myUserG[0]); // Output: Sujit
console.log(myUserG[1]); // Output: 27
console.log(myUserG2[0]); // Output: Sujit
console.log(myUserG2[1]); // Output: 27
console.log(myUserG2[2]); // Output: true
console.log(myUserG2[3]); // Output: 100000`
console.log(myUserG3[0]); // Output: Sujit
console.log(myUserG3[1]); // Output: 27