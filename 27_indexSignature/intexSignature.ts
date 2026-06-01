type userDetailsForRegistration = {
    name : string,
    fatheersName : string,
    email : string,
    password : string,
    confirmPassword : string

    [key : string] : string | number
}

let userDetails : userDetailsForRegistration = {
    name : "Sujit Kumar Singh", // this is required due to the type definition  of userDetailsForRegistration
    fatheersName : "Bhim Singh", // this is required due to the type definition  of userDetailsForRegistration
    email : "sujitkumarsingh@gmail.com", // this is required due to the type definition  of userDetailsForRegistration
    password : "sujit123", // this is required due to the type definition  of userDetailsForRegistration
    confirmPassword : "sujit123", // this is required due to the type definition  of userDetailsForRegistration
    age : 30, // this is not required but can be added due to the index signature in the type definition of userDetailsForRegistration
    mobileNumber : 1234567890 // this is not required but can be added due to the index signature in the type definition of userDetailsForRegistration
}



