
type personABC = {
    newName : string,
    age:number,
    isEmp:boolean
}

let myInfo: personABC = {
    newName : "TypeScript Boy",
    age : 20,
    isEmp : true,
};

type person001 = keyof personABC;
// let  myPersonData : person001; // or
let  myPersonData : keyof personABC;

myPersonData = "age";
myPersonData = "isEmp";
myPersonData = "newName";


let newUserA : keyof typeof myInfo = "age"

console.log(newUserA);

function myDataGetFun (obj: typeof myInfo, key: keyof typeof myInfo){
    return obj[key];
}

function myDataUpdateFun(field: keyof typeof myInfo, value: string | number){
    // myInfo[field] = value; // Type 'string | number' is not assignable to type 'never'. Type 'string' is not assignable to type 'never'.
    console.log(field, value)
}

// Advance with generic
function objUpdateFun<K extends keyof typeof myInfo>(field : K, value : typeof myInfo[K]){
    myInfo[field] = value;
}


console.log(myInfo) // { newName: 'TypeScript Boy', age: 20, isEmp: true }
objUpdateFun("age", 56)
console.log(myInfo) // { newName: 'TypeScript Boy', age: 56, isEmp: true }
