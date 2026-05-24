
function myName(name: string): string {
    return `My name is ${name}`;    
}

console.log(myName("John Doe"));

function add(a: number, b: number): number {
    return a + b;
}   

console.log(add(5, 10));

function noReturn(): void {
    console.log("This function does not return anything");
}

noReturn();

function optionalParameter(name: string, age?: number): string {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    } else {
        return `My name is ${name}.`;
    }      
}

console.log(optionalParameter("Sujit"));
console.log(optionalParameter("Tomar", 25));


function dualTypeDataReturn (name?: string, age?: number): string | number {
    if (name && age) {
        return `My name is ${name} and I am ${age} years old.`;
    } else if (name) {
        return `My name is ${name}.`;
    } else if (age) {
        return `I am ${age} years old.`;
    } else {        
        return "No data provided.";
    }   
}

console.log(dualTypeDataReturn("Sujit", 25));
console.log(dualTypeDataReturn("Tomar"));
console.log(dualTypeDataReturn(undefined, 30));
console.log(dualTypeDataReturn());

// Any type allows you to opt-out of type checking and can be used to store any type of value. However, it is generally recommended to avoid using the any type as it can lead to potential runtime errors and defeats the purpose of using TypeScript for type safety.
function anyTypeExample(data: any): void {
    console.log(`Data: ${data}`);
}
anyTypeExample("Hello, World!");
anyTypeExample(42);
anyTypeExample({ name: "Sujit", age: 25 });

// unknown type is a safer alternative to any, as it requires you to perform type checks before using the value. It is useful when you want to accept values of any type but still want to ensure type safety.
function unknownTypeExample(data: unknown): void {
    if (typeof data === "string") {
        console.log(`Data is a string: ${data}`);
    } else if (typeof data === "number") {
        console.log(`Data is a number: ${data}`);
    } else if (typeof data === "object" && data !== null) {
        console.log(`Data is an object: ${JSON.stringify(data)}`);
    } else {
        console.log("Data is of an unknown type.");
    }
}
unknownTypeExample("Hello, World!");
unknownTypeExample(42);
unknownTypeExample({ name: "Sujit", age: 25 });



