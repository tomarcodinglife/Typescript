
// in normally we can declare a variable like this
let user_Name: string = "Amar Singh";
let user_Age: number = 30;

// but in intersection type we can combine multiple types into one
type userDetails_Name = {name: string};
type userDetails_Age = {age: number};

type userDetails = userDetails_Name & userDetails_Age;

// With interface
interface userName_interface {
    name: string;
}

interface userAge_interface {
    age: number;
}   

type userDetails_interface = userName_interface & userAge_interface;

// Now we can create an object of type userDetails_interface

const user: userDetails_interface = {
    name: "Amar Singh",
    age: 30
};
