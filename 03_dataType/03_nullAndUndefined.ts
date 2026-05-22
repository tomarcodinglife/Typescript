// null
var myData1: null = null; // This variable can only hold the value null
var myUserName:string | null = null; // This variable can hold either a string or null
var isLogin: boolean = false; // This variable can only hold a boolean value

if (isLogin){
    myUserName = "Sujit Tomar";
    console.log(`User Name: ${myUserName}`);
}else{
    console.log("User is not logged in.");
}


// undefined
var userNameUS01: string | undefined = undefined; // This variable can hold either a string or undefined
var vall01:null = null; // This variable can only hold the value null

console.log(typeof myData1); // Output: "object"
console.log(typeof myUserName); // Output: "object" (because null is considered an object in JavaScript)
console.log(typeof isLogin); // Output: "boolean"

console.log(typeof userNameUS01); // Output: "undefined"
console.log(typeof vall01); // Output: "object" (because null is considered an object in JavaScript)
console.log(userNameUS01 == vall01);  // Output: true (because both are considered equal in JavaScript) 
console.log(userNameUS01 === vall01); // Output: false (because they are of different types)