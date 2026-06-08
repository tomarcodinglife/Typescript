function updateSumClass(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // const originalMethod = descriptor.value;
    descriptor.value = function (x: number, y: number) {
        console.log(`Arguments: ${x}, ${y}`);
        console.log("Updating the sum method to return the sum of two numbers");
        return x + y;
    };
}

function updateMultiplyClass(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; 
    descriptor.value = function (x: number, y: number) {
        console.log(`Arguments: ${x}, ${y}`);

        const result = originalMethod.apply(this, [x, y]);

        console.log("Updating the multiply method to return the product of two numbers");
        return result;
    };
}   


class MathFunctions {

    @updateSumClass
    sum(num1: number, num2: number): number {   
        return num1 + num2;
    }

    @updateMultiplyClass
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

let mathFunctions = new MathFunctions();
console.log(mathFunctions.sum(10, 20)); // Arguments: 10, 20

let result = mathFunctions.multiply(10, 20);
console.log(result); // 200