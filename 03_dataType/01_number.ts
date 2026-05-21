
var mathMarks: number = 69;
var myNumber: number = 69;

var myNu1:number = 33;
var myNu2:number = 33.33;

var userInputF: number = 50;
var userInputS: string = "50";

// type conversion in typescript
var usIS = Number(userInputS); // This will convert the string to a number  

var usIS2 = +userInputS; // This will also convert the string to a number   

var userInputs = userInputF + usIS; // This will result in number addition
var userInputs2 = userInputF+ +userInputS; // This will also result in number addition

// two types data type in single variable
var myData: number | string; // This variable can hold either a number or a string
myData = 100;
myData = "Hello, TypeScript!";
var myData2: number | string = 200; // This variable can hold either a number or a string
myData2 = "Hello, TypeScript!";

console.log(`My Marks: ${mathMarks}`);
console.log(`My Number: ${myNumber}`);
console.log(`My Nu1 + My Nu2 : ${myNu1 + myNu2}`);    
console.log(`User Inputs: ${userInputs}`);
console.log(`User Input String: ${userInputS}`);
