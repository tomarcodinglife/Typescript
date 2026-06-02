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




