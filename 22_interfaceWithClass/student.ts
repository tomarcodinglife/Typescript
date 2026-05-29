import type { studentData } from "./interface";


class student implements studentData {
    name: string;
    age: number;
    email: string
    password: string;
    type: string;
    course: string;
    rollNumber: number;
    batch: string;
    modeofCourse: string;

    constructor(name: string, age: number, email: string, password: string, type: string, course: string, rollNumber: number, batch: string, modeofCourse: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.type = type;
        this.course = course;
        this.rollNumber = rollNumber;
        this.batch = batch;
        this.modeofCourse = modeofCourse;
    }

    displayUserData(): void {
        console.log(`Student Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Type: ${this.type}`);
    }


    displayStudentData(): void {
        console.log(`The Student ${this.name} is enrolled in the course ${this.course} with roll number ${this.rollNumber}. They are part of the ${this.batch} batch and are taking the course in ${this.modeofCourse} mode.`); 
    }

}


let student1 = new student(
    "Sujit Kumar", 
    22, 
    "sujit@example.com", 
    "password123", 
    "regular", 
    "Computer Science", 
    101, 
    "2023", 
    "online"
);
   
student1.displayUserData();
student1.displayStudentData();
