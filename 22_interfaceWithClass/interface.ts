export interface userData {
    name: string;
    age: number;
    email: string;
    password: string;
    type: string;

    displayUserData(): void;

}

export interface studentData extends userData {
    course: string;
    rollNumber: number;
    batch: string;
    modeofCourse: string;

    displayStudentData(): void;

}

export interface teacherData extends userData {
    subject: string;
    employeeId: number;
    department: string;
    experience: number;

    displayTeacherData(): void;
}