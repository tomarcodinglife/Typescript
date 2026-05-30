class Student {
    name: string;
    rollNo: number;
    fatherName: string;
    static schoolName: string = "ABC School";

    constructor(name: string, rollNo: number, fatherName: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.fatherName = fatherName;
    }

    displayDetails(): void {
        console.log(`The Student Name is ${this.name}, Roll No is ${this.rollNo}, Father Name is ${this.fatherName} and School Name is ${Student.schoolName}`);
    }

    get mySchoolName(): string {
        return Student.schoolName;
    }

    static getSchoolName(): string {
        return Student.schoolName;
    } 

}


let student = new Student("Sujit", 101, "Tomar");
console.log(student.displayDetails());
console.log(student.mySchoolName);
console.log(student.rollNo);
console.log(Student.schoolName); // Accessing static property directly using class name
console.log(Student.getSchoolName()); // Accessing static method

console.log(student.schoolName) // Error: Property 'schoolName' does not exist on type 'Student'.