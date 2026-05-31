
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
let  myPersonData : person001;



