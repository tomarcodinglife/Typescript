function classLogger(constructor: Function) {
    console.log("Class Logger Decorator called");
    console.log(constructor);
}

function getKeyLogger(target: any, propertyKey: any) {
    console.log("Target : ", target);
    console.log("Property Key : ", propertyKey);
}


@classLogger // Decorator for class : It is called when the class is defined and it receives the constructor function of the class as an argument.
class CustomMaths {

    @getKeyLogger // Decorator for property : It is called when the property is defined and it receives the target object and the property key as arguments.
    value21 : number;
    value22 : number;

    constructor(value21 : number, value22 : number) {   
        this.value21 = value21;
        this.value22 = value22;
    }   
}

var customMaths = new CustomMaths(10, 20);

@classLogger // Decorator for class : It is called when the class is defined and it receives the constructor function of the class as an argument.
class User {


    name : string
    age : number 
    email : string 

    constructor(name : string, age : number, email : string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}

let user1 = new User("John", 30, "john@example.com");





