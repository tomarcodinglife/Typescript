// Access modifiers in TypeScript are used to control the visibility of class members (properties and methods). There are three main access modifiers: `public`, `private`, and `protected`.

class Person {
    public name: string; // Public members can be accessed from anywhere
    private age: number; // Private members can only be accessed within the class
    protected email: string; // Protected members can be accessed within the class and its subclasses

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    } 
}

class Employee extends Person {

    constructor(name: string, age: number, email: string) {
        super(name, age, email);
    }

    getEmail(): string {
        return this.email; // Accessing protected member from subclass
    }

}

let person1 = new Person("Sujit Tomar", 26, "info@sujittomar.com");
let employee1 = new Employee("Amit", 25, "test@amit.com");

console.log(person1.name); // Accessing public member
// console.log(person1.age); // Error: Property 'age' is private
console.log(employee1.getEmail()); // Accessing protected member through public method