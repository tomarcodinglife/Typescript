var str1:string = "Sujit Tomar";
var str2:string = 'Sujit Tomar';
var str3:string = `Sujit Tomar`;

var age:number = 27;

var info:string = `My name is ${str1} and I am ${age} years old.`;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(info);

// convert in number to string
var num1:number = 100;
var myStr:string = String(num1); // This will convert the number to a string
var myStr2:string = num1.toString(); // This will also convert the number to a string   
var myStrConvert: string = " " + num1; // This will also convert the number to a string by concatenation    

// convert boolean to string
var isPass:boolean = true;
var myStr3:string = true.toString(); // This will convert the boolean to a string
var myStr4:string = String(isPass); // This will also convert the boolean to a string
var myStr5:string = "" + isPass; // This will also convert the boolean to a string by concatenation


console.log(`Number: ${num1}`); 
console.log(`String: ${myStr}`);
console.log(`String2: ${myStr2}`);
console.log(`String3: ${myStrConvert}`);
console.log(`Boolean: ${isPass}`);