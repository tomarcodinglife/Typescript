
var value0212:any = "Sujit";
value0212 = 1234;
value0212 = true;
value0212 = { name: "Sujit", age: 25 };

var value0213:unknown = "Sujit";
value0213 = 1234;
value0213 = true;
value0213 = { name: "Sujit", age: 25 };

if (typeof value0213 === "string") {
    console.log(value0213.toUpperCase());
}   


// difference between any and unknown
// any allows you to perform any operation on the variable without any type checking, while unknown requires you to perform type checking before using the variable.   


