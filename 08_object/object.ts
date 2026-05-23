
var userDataNew:{name:string,age:number} = {
    name:"Sujit",
    age:25
}

userDataNew.name = "Sujit Kumar"; // No error, we can modify the properties of userDataNew

// readOnly object

var myObj1:Readonly<{name:string,age:number}> = {
    name:"Sujit",
    age:25
}

// myObj1.name = "Sujit Kumar"; // Error: Cannot assign to 'name' because it is a read-only property.  


// Object with multiple properties

var ObjectNewZ: {[key:string]: number|string|boolean} = {
    studentNameNew:"Sujit",
    age:25,
    marks:85,
    isPassed:true
}

// Nested Object
var myNewObjNested: {
    name: string,
    age: number,
    address: {}
}={
    name:"Sujit",
    age:25,
    address:{
        city:"New York",
        country:"USA",
        house:"123 Main St"
    }
}

var myNewObjNested2: {
    name: string,
    age: number,
    address: {
        city: string,
        country: string,
        house: string
    }
}={
    name:"Sujit",   
    age:25,
    address:{
        city:"New York",
        country:"USA",
        house:"123 Main St"
    }
}



console.log(userDataNew);
console.log(myObj1);
console.log(ObjectNewZ);
console.log(myNewObjNested);
console.log(myNewObjNested2);

// 