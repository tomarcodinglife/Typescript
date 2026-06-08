
function complexLogic(): Promise<string> { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            if(randomNum > 0.5){
                resolve(`Success! Random number: ${randomNum}`);
            } else {
                reject(`Failure! Random number: ${randomNum}`);
            }
        }, 1000);

    });

}


function testNew (){
    console.log("Testing new function");
}


function testPromise(){

    complexLogic()
        .then((result : string) => {
            console.log("Promise Resolved: ", result);
        })
        .catch((error : string) => {
            console.log("Promise Rejected: ", error);
        }); 
    
        testNew(); // Testing new function
}



testPromise();

