

var bigNumber = 9007199254740991; // it is the maximum safe integer in JavaScript, which is 2^53 - 1    
console.log(bigNumber);

var x = 1;
var y = 2;

// BigInt can handle numbers larger than the maximum safe integer, so we can add bigNumber to other numbers without losing precision.
// var noBigInt:number = 1234567890123456789012345678901234567890 // This will cause an error because the number is too large to be represented as a regular number in JavaScript.

var myBigIntNum: bigint = 1234567890123456789012345678901234567890n; // Using 'n' at the end to denote a BigInt literal.

console.log(myBigIntNum); // Using BigInt to handle large numbers without losing precision.