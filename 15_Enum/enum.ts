enum resultStatus{
    passed = "passed",
    failed = "failed",
    pending = "pending"
}

function getResult(status: resultStatus): string{
    switch(status){
        case resultStatus.passed:
            return "Congratulations! You passed the test.";
        case resultStatus.failed:
            return "Sorry, you failed the test. Better luck next time!";
        case resultStatus.pending:
            return "Your test results are pending. Please check back later.";
        default:
            return "Invalid status.";
    }   
}

console.log(getResult(resultStatus.passed));
console.log(getResult(resultStatus.failed));
console.log(getResult(resultStatus.pending));
console.log(getResult("unknown" as resultStatus));

enum userRole{
    admin = "admin",
    editor = "editor",
    viewer = "viewer"
};


var currentUserRole: userRole = userRole.admin;

if(currentUserRole === userRole.admin){
        console.log("You have admin privileges.");
    }else if(currentUserRole === userRole.editor){
        console.log("You have editor privileges.");
    }else if(currentUserRole === userRole.viewer){
        console.log("You have viewer privileges.");
    }else{
        console.log("Unknown user role.");
    }   

/* Enum ka use - Enum ka use hum tab karte hain jab hume ek set of related constants ko represent karna hota hai. Isse code zyada readable aur maintainable ban jata hai. Enum ke through hum apne code me meaningful names de sakte hain, jo ki code ko samajhne me madad karta hai. Enum ke members ko hum string ya number values assign kar sakte hain, jisse hum apne code me unhe easily refer kar sakte hain.

Is example me humne ek enum banaya hai jiska naam hai resultStatus, jisme humne teen members define kiye hain: passed, failed, aur pending. Har member ko humne ek string value assign ki hai. Phir humne ek function getResult banaya hai jo resultStatus type ka parameter leta hai aur uske basis par ek message return karta hai. Is tarah se hum apne code me enum ka use karke apne constants ko organize kar sakte hain aur apne code ko zyada readable bana sakte hain.

*/


enum favoriteColor{
    red,
    green,
    blue,
    black,
    white
}

const myShirtColor:favoriteColor = favoriteColor.blue;
console.log(`My shirt color is: ${favoriteColor[myShirtColor]}`);

console.log(`My shirt color is: ${myShirtColor}`);
console.log(favoriteColor.blue); /* Output: 2 because blue is the third member of the enum and enums are zero-indexed by default.*/