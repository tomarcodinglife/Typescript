
interface staffs {
    name: string;
    age: number;
    position: string;
    salary: number;
}

interface managemetnStaff extends staffs {
    department: string;
}

interface technicalStaff extends staffs {
    programmingLanguages: string[];
}

interface nonTechnicalStaff extends staffs {
    areaOfExpertise: string;
}


const staff1: staffs = {
    name: "Sujit Tomar",
    age: 30,
    position: "Software Engineer",
    salary: 60000
};

const staff2: managemetnStaff = {
    name: "Anita Sharma",
    age: 45,
    position: "Project Manager",
    salary: 90000,
    department: "IT"
};

const staff3: technicalStaff = {
    name: "Ravi Kumar",
    age: 28,
    position: "Frontend Developer",
    salary: 55000,
    programmingLanguages: ["JavaScript", "TypeScript", "React"]
};

const staff4: nonTechnicalStaff = {
    name: "Priya Singh",
    age: 35,
    position: "HR Specialist",
    salary: 50000,
    areaOfExpertise: "Recruitment"
};


console.log(staff1);
console.log(staff2);
console.log(staff3);
console.log(staff4);



