class Auth {
    login(name:string, password:string):string{
        if(name && password){
            return "Login successful";
        }else{
            return "Login failed";
        }
}


class student extends Auth{

    result(marks:number):string{
        if(marks >= 50){
            return "Pass";
        }else{
            return "Fail";
        }
    }

}

class teacher extends Auth{
    login(name:string, password:string):string{
        if(name && password){
            return "Login successful";
        }else{
            return "Login failed";
        }
    }

    subject (subjectName:string):string{
        return `Teaching ${subjectName}`;
    }

}

var student1 = new student();
console.log(student1.login("John", "password123"));
console.log(student1.result(60));

var teacher1 = new teacher();
console.log(teacher1.login("Mr. Smith", "password456"));
console.log(teacher1.subject("Mathematics"));   

