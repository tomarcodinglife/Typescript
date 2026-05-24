
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
