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

    get staticSchoolName(): string {
        return Student.schoolName;
    }

}


let student = new Student("Sujit", 101, "Tomar");
console.log(student.displayDetails());
console.log(student.staticSchoolName);
console.log(student.rollNo);