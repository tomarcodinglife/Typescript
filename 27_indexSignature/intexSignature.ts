// What is an index signature in TypeScript?
// An index signature in TypeScript is a way to define the type of properties that can be added to an object. It allows us to specify the type of keys and values that can be added to an object, even if we don't know the exact keys at the time of defining the type. This is particularly useful when we want to create a type that can have a variable number of properties.


// Flexible Object Types with Index Signatures in TypeScript

type userDetailsForRegistration = {
    name : string, // this is required due to the type definition  of userDetailsForRegistration
    fathersName : string, // this is required due to the type definition  of userDetailsForRegistration
    email : string, // this is required due to the type definition  of userDetailsForRegistration
    password : string, // this is required due to the type definition  of userDetailsForRegistration
    confirmPassword : string // this is required due to the type definition  of userDetailsForRegistration

    [key : string] : string | number // this is an index signature which allows us to add any number of properties with string keys and string or number values to the userDetailsForRegistration type
}

let userDetails : userDetailsForRegistration = {
    name : "Sujit Kumar Singh", // this is required due to the type definition  of userDetailsForRegistration
    fathersName : "Bhim Singh", // this is required due to the type definition  of userDetailsForRegistration
    email : "sujitkumarsingh@gmail.com", // this is required due to the type definition  of userDetailsForRegistration
    password : "sujit123", // this is required due to the type definition  of userDetailsForRegistration
    confirmPassword : "sujit123", // this is required due to the type definition  of userDetailsForRegistration
    age : 30, // this is not required but can be added due to the index signature in the type definition of userDetailsForRegistration
    mobileNumber : 1234567890 // this is not required but can be added due to the index signature in the type definition of userDetailsForRegistration
}

userDetails.email = "newemail@gmail.com" // this is allowed because email is a required property in the type definition of userDetailsForRegistration.

// Read Only Index Signatures in TypeScript
type readOnlyUserDetailsForRegistration = {
    readonly name : string, // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    readonly fathersName : string, // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    readonly email : string, // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    readonly password : string, // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    readonly confirmPassword : string, // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    readonly [key : string] : string | number // this is a read-only index signature which allows us to add any number of properties with string keys and string or number values to the readOnlyUserDetailsForRegistration type but they cannot be modified after they are added
}



let readOnlyUserDetails : readOnlyUserDetailsForRegistration = {
    name : "Sujit Kumar Singh", // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    fathersName : "Bhim Singh", // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    email : "test@gmail.com", // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    password : "sujit123", // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    confirmPassword : "sujit123", // this is required due to the type definition  of readOnlyUserDetailsForRegistration
    age : 30, // this is not required but can be added due to the index signature in the type definition of readOnlyUserDetailsForRegistration
    mobileNumber : 1234567890 // this is not required but can be added due to the index signature in the type definition of readOnlyUserDetailsForRegistration
}

readOnlyUserDetails.email = "new_email@gmail.com" // this is not allowed because email is a required property in the type definition of readOnlyUserDetailsForRegistration and the index signature is read-only, so we cannot modify the properties after they are added. This will result in a TypeScript error.

console.log(`userDetails: ${JSON.stringify(userDetails)}`) // this will log the userDetails object with all the properties including the required and optional properties.

console.log("-----------------------------------------------------------------`")


console.log(`readOnlyUserDetails: ${JSON.stringify(readOnlyUserDetails)}`) // this will log the readOnlyUserDetails object with all the properties including the required and optional properties.    

