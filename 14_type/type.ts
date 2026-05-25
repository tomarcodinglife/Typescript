
// Whta is Difference between Type and Interface in TypeScript?
// Type and Interface are both used to define the shape of an object in TypeScript. However, there are some differences between them:

// 1. Syntax: Type uses the 'type' keyword, while Interface uses the 'interface' keyword.
// 2. Extensibility: Interfaces can be extended using the 'extends' keyword, while Types cannot be extended.
// 3. Declaration Merging: Interfaces support declaration merging, which means you can declare the same interface multiple times and TypeScript will merge them together. Types do not support declaration merging.
// 4. Use Cases: Interfaces are generally used for defining the shape of objects, while Types are more versatile and can be used for defining primitive types, union types, intersection types, etc.
// 5. Interesection can use in  type while it is not possible in interface

type DataType = {name:string, email:string, age:number};

var AdminDetails:DataType = {
    name: "Amar Singh",
    email: "amarsingh@gmail.com",
    age: 30
}

var subAdminDetails:DataType = {
    name: "Sujit Singh",
    email: "sujitsingh@gmail.com",
    age: 25
}

var userDetails:DataType = {
    name: "Rohit Singh",
    email: "rohitsingh@gmail.com",
    age: 23
}

type a = {name:string}
type b = {age:number}

type c = a & b; // intersection of type a and b and it only possible in type and not in interface

var userDetails2: c = {
    name: "Priya Singh",
    age: 28
}









