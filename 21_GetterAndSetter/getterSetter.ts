
class User {
    protected _name: string;
    protected _email: string;
    protected _password: string;
    protected _age: number;

    constructor(name: string, email: string, password: string, age: number) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value) {
            this._name = value;
        } else {
            console.log("Name cannot be empty.");
        }
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (value) {
            this._email = value;
        } else {
            console.log("Email cannot be empty.");
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (value) {
            this._password = value;
        } else {
            console.log("Password cannot be empty.");
        }
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Age must be a positive number.");
        }
    }
}

let user = new User("Sujit", "sujit@abc.com", "password123", 30);
console.log(user.name); // Output: Sujit
user.name = "Sujit Kumar";
console.log(user.name); // Output: Sujit Kumar
user.email = "sujit.kumar@abc.com";
console.log(user.email); // Output: 

user.age = 23;
console.log(user.age); // Output: 23
