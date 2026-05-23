
console.log("Test Array");

var regUser: string[] = ["Sujit", "Sourav", "Satyam", "Satyarth"]; // Array of string type
regUser.push("Satyarth"); // Adding new element to the array
var regUser1: Array<string> = ["Sujit", "Sourav", "Satyam", "Satyarth"]; // Another way to declare array of string type
regUser1.push("Satyarth"); // Adding new element to the array

var regUser2: (string | number)[] = ["Sujit", "Sourav", "Satyam", "Satyarth", 123]; // Array of string and number type
regUser2.push(456); // Adding new element to the array
var regUser3: Array<string | number> = ["Sujit", "Sourav", "Satyam", "Satyarth", 123]; // Another way to declare array of string and number type
regUser3.push(456); // Adding new element to the array

var regUser4: any[] = ["Sujit", "Sourav", "Satyam", "Satyarth", 123, true]; // Array of any type
regUser4.push("Satyarth"); // Adding new element to the array
var regUser5: Array<any> = ["Sujit", "Sourav", "Satyam", "Satyarth", 123, true]; // Another way to declare array of any type    
regUser5.push("Satyarth"); // Adding new element to the array

var myGraduationMarks: number[] = [85, 90, 95, 80]; // Array of number type
myGraduationMarks.push(88); // Adding new element to the array

console.log(regUser);
console.log(regUser1);
console.log(regUser2);
console.log(regUser3);
console.log(regUser4);
console.log(regUser5);
console.log(myGraduationMarks);

// Read Only Array
var myGraduationMarks1: ReadonlyArray<number> = [85, 90, 95, 80]; // Readonly array of number type
// myGraduationMarks1.push(88); // Error: Property 'push' does not exist on type 'readonly number[]'.
console.log(myGraduationMarks1);

