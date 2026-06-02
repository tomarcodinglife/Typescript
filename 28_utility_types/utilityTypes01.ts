interface UsersRegistration {
    name : string, 
    email : string,
    password : string,
    confirmPassword : string,
    dateOfBirth : string,
    age : number
}

// Partial - makes all the properties of the type optional
let userDetails : Partial<UsersRegistration> = {
    name : "Sujit Kumar Singh", 
    email : "sujit@test.com",
    password : "sujit123",
    confirmPassword : "sujit123",
    dateOfBirth : "01/01/1999",
}

console.log(`userDetails: ${JSON.stringify(userDetails)}`) // this will log the userDetails object with all the properties including the required and optional properties.

// function userRegistration(userDetails : Required<UsersRegistration>) - in this case, all the properties of the userDetails object will be required and if any property is missing, it will throw an error.

// Partial - makes all the properties of the type optional
function userRegistration(userDetails : Partial<UsersRegistration>) { // in this case, all the properties of the userDetails object will be optional and if any property is missing, it will not throw an error.
    console.log(`userDetails: ${JSON.stringify(userDetails)}`) // this will log the userDetails object with all the properties including the required and optional properties.
}

userRegistration({
    name : "Sujit Kumar Singh", 
    email : "",
    password : "sujit123",
    confirmPassword : "sujit123",
})

// Required - makes all the properties of the type required

interface userReg {
    name : string,
    email : string,
    password : string,
    confirmPassword : string,
    Age? : number, // optional property for normal user registration, but in required function, this property will be required and if we remove this property, it will throw an error.
}

function userRegistrationRequired(userDetails : Required<userReg>) { // in this case, all the properties of the userDetails object will be required and if any property is missing, it will throw an error.
    console.log(`userDetails: ${JSON.stringify(userDetails)}`) // this will log the userDetails object with all the properties including the required and optional properties.
}   

userRegistrationRequired({
    name : "Sujit Kumar Singh", 
    email : "",
    password : "sujit123",
    confirmPassword : "sujit123",
    Age : 25 // this property is required in the userRegistrationRequired function, if we remove this property, it will throw an error.
})

// Readonly - makes all the properties of the type readonly, which means that we cannot change the value of the properties after they are assigned.

interface userProfile {
    name : string,
    email : string,
    password : string,
    confirmPassword : string,
    Age : number,
}

var userProfileDetails : Readonly<userProfile> = { // in this case, all the properties of the userProfileDetails object will be readonly and if we try to change the value of any property, it will throw an error.
    name : "Sujit Kumar Singh", 
    email : "",
    password : "sujit123",
    confirmPassword : "sujit123",
    Age : 25
}

// userProfileDetails.name = "Sujit Kumar Singh Updated" // this will throw an error because the name property is readonly and we cannot change its value after it is assigned.

console.log(`userProfileDetails: ${JSON.stringify(userProfileDetails)}`) // this will log the userProfileDetails object with all the properties including the required and optional properties.


// Pick - allows us to create a new type by picking a set of properties from an existing type.

type userLoginDetails = Pick<userProfile, "email" | "password"> // in this case, we are creating a new type userLoginDetails by picking the email and password properties from the userProfile type.

let userLogin : userLoginDetails = {
    email : "",
    password : "sujit123",
}