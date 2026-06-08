
interface User  {
    name : string
    age : number 
    email : string 
}


function complexLogic(): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "John",
                age : 30,
                email : "abc@gmail.com"
            }); 
        }, 1000);
    });
}   


function testPromise(){

    complexLogic()
        .then((result : User) => {
            console.log("Promise Resolved: ", result);
        })
        .catch((error : string) => {
            console.log("Promise Rejected: ", error);
        });
}

testPromise();

