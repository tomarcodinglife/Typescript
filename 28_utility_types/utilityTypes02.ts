// Omit 

interface myPortalUserReg {
    name : string,
    email : string,
    password : string,
    confirmPassword : string,
    Age : number,
    isAdmin : boolean, // 
}

var newUserDetails : Omit<myPortalUserReg, "isAdmin"> = { // in this case, the isAdmin property will be omitted from the userDetails object and if we try to access the isAdmin property, it will throw an error.
    name : "Sujit Kumar Singh", 
    email : "",
    password : "sujit123",
    confirmPassword : "sujit123",
    Age : 25
    // isAdmin : false // this property is omitted in the newUserDetails object, if we try to add this property, it will throw an error.
}   




// Exclude - Exclude is used to exclude a type from a union type.

type APICallStatus = "success" | "error" | "pending" | "loading";

var APICall : Exclude<APICallStatus, "loading">; // in this case, the loading type will be excluded from the APICallStatusWithoutLoading type and if we try to assign the loading type to a variable of type APICallStatusWithoutLoading, it will throw an error.
APICall = "success"; // this is valid
APICall = "error"; // this is valid
APICall = "pending"; // this is valid
// APICall = "loading"; // this will throw an error because the loading type is excluded from the APICallStatusWithoutLoading type.



// Extract - Extract is used to extract a type from a union type.

var APICallA : Extract<APICallStatus, "success" | "error">; // in this case, only the success and error types will be extracted from the APICallStatus type and if we try to assign any other type to a variable of type APICallStatusWithSuccessAndError, it will throw an error.

APICallA = "success"; // this is valid
APICallA = "error"; // this is valid
// APICallA = "pending"; // this will throw an error because the pending type is not extracted from the APICallStatus type.
// APICallA = "loading"; // this will throw an error because the loading type is not extracted from the APICallStatus type.

// NonNullable - NonNullable is used to exclude null and undefined from a type.
type RandamType = string | number | boolean | string[];
var myRandomType : NonNullable<RandamType>; // in this case, the null and undefined types will be excluded from the RandamType type and if we try to assign null or undefined to a variable of type NonNullableRandamType, it will throw an error.

myRandomType = "Hello"; // this is valid
myRandomType = 123; // this is valid
myRandomType = true; // this is valid
myRandomType = ["Hello", "World"]; // this is valid
// myRandomType = null; // this will throw an error because the null type is excluded from the NonNullableRandamType type.
// myRandomType = undefined; // this will throw an error because the undefined type is excluded from the NonNullableRandamType type.

// Record - Record is used to create a type with a set of properties of a specific type.
type UserRoles = "admin" | "editor" | "viewer";
var userRoles : Record<UserRoles, string>; // in this case, the userRoles object will have properties of type UserRoles and the value of each property will be of type string. If we try to add a property that is not of type UserRoles or if we try to assign a value that is not of type string to any property, it will throw an error.

userRoles = {
    admin : "Admin User - Amit", // this is valid
    editor : "Editor User - Rohit", // this is valid
    viewer : "Viewer User - Priya" // this is valid
    // manager : "Manager User" // this will throw an error because the manager property is not of type UserRoles.
}

type UserPermissions = "read" | "write" | "delete";
var userAcess: UserPermissions = "read"; // this is valid
userAcess = "write"; // this is valid
userAcess = "delete"; // this is valid
// userAcess = "execute"; // this will throw an error because the execute type is not of type UserPermissions.  






