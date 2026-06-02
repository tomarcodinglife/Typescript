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
    Age? : number, // optional property
}

function userRegistrationRequired(userDetails : Required<userReg>) { // in this case, all the properties of the userDetails object will be required and if any property is missing, it will throw an error.
    console.log(`userDetails: ${JSON.stringify(userDetails)}`) // this will log the userDetails object with all the properties including the required and optional properties.
}   


