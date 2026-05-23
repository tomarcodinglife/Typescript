
console.log("Test Array");

var regUser: string[] = ["Sujit", "Sourav", "Satyam", "Satyarth"]; // Array of string type
var regUser1: Array<string> = ["Sujit", "Sourav", "Satyam", "Satyarth"]; // Another way to declare array of string type

var regUser2: (string | number)[] = ["Sujit", "Sourav", "Satyam", "Satyarth", 123]; // Array of string and number type
var regUser3: Array<string | number> = ["Sujit", "Sourav", "Satyam", "Satyarth", 123]; // Another way to declare array of string and number type

var regUser4: any[] = ["Sujit", "Sourav", "Satyam", "Satyarth", 123, true]; // Array of any type
var regUser5: Array<any> = ["Sujit", "Sourav", "Satyam", "Satyarth", 123, true]; // Another way to declare array of any type    

console.log(regUser);
console.log(regUser1);
console.log(regUser2);
console.log(regUser3);
console.log(regUser4);
console.log(regUser5);

console.log(typeof regUser);
console.log(typeof regUser1);
console.log(typeof regUser2);
console.log(typeof regUser3);
console.log(typeof regUser4);
console.log(typeof regUser5);