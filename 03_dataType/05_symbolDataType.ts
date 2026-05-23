var userid012: symbol = Symbol("userid012");
var userid013: symbol = Symbol("userid012");

console.log(userid012); // Symbol(userid012)
console.log(userid013); // Symbol(userid012)

console.log(userid012 === userid013); // false because each Symbol is unique, even if they have the same description.

const myNewObj = {
    [userid012]: "User 012's data",
    [userid013]: "User 013's data",
    name: "My Object"
};

console.log(myNewObj[userid012]); // User 012's data
console.log(myNewObj[userid013]); // User 013's data
console.log(myNewObj.name); // My Object

// Symbols are often used to create unique property keys in objects, ensuring that they do not collide with other property keys.    
