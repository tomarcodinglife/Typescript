function updateSumClass(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    
    const originalMethod = descriptor.value; // Store the original method   

    descriptor.value = function (...args: any[]) { // Replace the original method with a new function
        console.log(`Arguments: ${args.join(", ")}`); // Log the arguments passed to the method
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`); // Log the result of the method
        return result; // Return the result of the original method

    };
}   


class MathFunctions {


    sum(num1: number, num2: number): number {   
        return num1 + num2;
    }

    multiply(number1: number, number2: number): number {
        return number1 * number2;
    }

    subtract(number1: number, number2: number): number {
        return number1 - number2;
    }

    divide(number1: number, number2: number): number {
        if (number2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return number1 / number2;
    }

}