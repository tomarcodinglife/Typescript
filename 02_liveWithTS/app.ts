
let StudentName: string = "Sujit Tomar";
let StudentAge: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
let mixedArray: (string | number | boolean)[] = ["Hello", 42, true];
let tupleExample: [string, number] = ["Age", 25];



console.log(`Student Name: ${StudentName}`);
console.log(`Student Age: ${StudentAge}`);
console.log(`Is Student: ${isStudent}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Mixed Array: ${mixedArray.join(", ")}`);
console.log(`Tuple Example: ${tupleExample[0]} : ${tupleExample[1]}`);
