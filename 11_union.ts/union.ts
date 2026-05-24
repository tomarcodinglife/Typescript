
var studentData: string | number | boolean | string[] = "Sujit Kumar Singh";

studentData = 32525;
studentData = true;
studentData = ["Sujit", "Sourav", "Satyam", "Satyarth"];


function mySchoolStudent(): string | number | boolean | string[] {
    return studentData;
}

function myRandomDataReturn(): string | number | boolean | string[] {
    let data = studentData;
    if (typeof data === "string") {
        return data;
    }
    else if (typeof data === "number") {
        return data;
    }
    else if (typeof data === "boolean") {
        return data;
    }
    else if (Array.isArray(data)) {
        return data;
    }
}


