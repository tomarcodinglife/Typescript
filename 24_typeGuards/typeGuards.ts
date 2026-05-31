let newUserID : number | string = 456852;

newUserID = "456852";

if (typeof newUserID === "number") {
    console.log(`The new user ID is a number: ${newUserID}`);
}else if (typeof newUserID === "string") {
    console.log(`The new user ID is a string: ${newUserID}`);
}else{
    console.log("The new user ID is of an unknown type.");

}


function checkDataType(data: number | string | boolean) {
    if (typeof data === "number") {
        console.log(`The data is a number: ${data}`);
    } else if (typeof data === "string") {
        console.log(`The data is a string: ${data}`);
    } else if (typeof data === "boolean") {
        console.log(`The data is a boolean: ${data}`);
    } else {
        console.log("The data is of an unknown type.");
    }
}

checkDataType(42);
checkDataType("Hello, TypeScript!");
checkDataType(true);


class productCategory {
    productName: string;
    productPrice: number;
    productDescription: string;

    constructor(name: string, price: number, description: string) {
        this.productName = name;
        this.productPrice = price;
        this.productDescription = description;
    }
}

class serviceCategory {
    serviceName: string;
    servicePrice: number;
    serviceDescription: string;

    constructor(name: string, price: number, description: string) {
        this.serviceName = name;
        this.servicePrice = price;
        this.serviceDescription = description;
    }
}


function productCategoryCheck (itemDetails : productCategory | serviceCategory) {
    if (itemDetails instanceof productCategory) {
        console.log(`The item is a product: ${itemDetails.productName}, Price: ${itemDetails.productPrice}, Description: ${itemDetails.productDescription}`);
    }else if (itemDetails instanceof serviceCategory) { 
        console.log(`The item is a service: ${itemDetails.serviceName}, Price: ${itemDetails.servicePrice}, Description: ${itemDetails.serviceDescription}`);
    }else {
        console.log("The item is of an unknown category.");
    }
}

let item001: productCategory | serviceCategory = new productCategory("Laptop", 999.99, "A high-performance laptop.");
let item002: productCategory | serviceCategory = new serviceCategory("Software Development", 56566, "Update Software")

productCategoryCheck(item001);
productCategoryCheck(item002);


// interface case

interface Book {
    name: string;
    price:number;
}

interface Student {
    name:string;
    stuRoll:number;
    class:string;
}

function checkMyDataInfo(data:Student | Book){
    if("price" in data){
        console.log(` ${data} is Book`)
    }else if ("stuRoll" in data){
        console.log(`${data} is Student`)
    }else{
        console.log("Not Clear")
    }
}


var data001:Book | Student  

data001 = {
    name : "Sujit Tomar",
    stuRoll : 565,
    class : "B.Tech",
}


checkMyDataInfo(data001)









