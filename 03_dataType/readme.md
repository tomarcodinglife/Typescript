# Data Type Categories in TypeScript

TypeScript provides different categories of data types that help developers write safer and more predictable code. Data types define what kind of value a variable can store.

TypeScript Data Types are mainly divided into:

1. Primitive Types
2. Object Types
3. Special Types
4. Advanced Types
5. Function Types

---

# 1. Primitive Types

Primitive data types store single values and are the basic building blocks of TypeScript.

## String

Used to store text values.

```typescript
let studentName: string = "Sujit Tomar";

console.log(studentName);
```

Output:

```txt
Sujit Tomar
```

---

## Number

Used to store numeric values.

```typescript
let age: number = 25;
let price: number = 99.99;

console.log(age);
console.log(price);
```

Output:

```txt
25
99.99
```

---

## Boolean

Stores true or false values.

```typescript
let isStudent: boolean = true;

console.log(isStudent);
```

Output:

```txt
true
```

---

## Undefined

Variable declared but no value assigned.

```typescript
let userName: undefined = undefined;

console.log(userName);
```

---

## Null

Represents intentionally empty value.

```typescript
let data: null = null;

console.log(data);
```

---

## BigInt

Stores very large integers.

```typescript
let population: bigint = 12345678901234567890n;

console.log(population);
```

---

## Symbol

Creates unique values.

```typescript
let id: symbol = Symbol("id");

console.log(id);
```

---

# 2. Object Types

Object types store collections of related data.

## Object

```typescript
let student: object = {
    name: "Sujit",
    age: 25
};

console.log(student);
```

---

## Array

Stores multiple values.

```typescript
let hobbies: string[] = [
    "Reading",
    "Traveling",
    "Coding"
];

console.log(hobbies);
```

Output:

```txt
["Reading","Traveling","Coding"]
```

---

## Tuple

Tuple stores fixed number of values with fixed types.

```typescript
let user: [string, number] = [
    "Sujit",
    25
];

console.log(user);
```

---

# 3. Special Types

Special types provide flexibility and control.

## Any

Allows any type.

```typescript
let data: any = "Hello";

data = 25;

data = true;
```

Problem:

No type checking.

---

## Unknown

Safer version of any.

```typescript
let value: unknown = "Hello";
```

Must check type before use:

```typescript
if(typeof value==="string"){
    console.log(value.toUpperCase());
}
```

---

## Void

Used in functions that return nothing.

```typescript
function printMessage(): void{
    console.log("Hello");
}
```

---

## Never

Function never returns.

```typescript
function throwError(): never{
    throw new Error("Something went wrong");
}
```

---

# 4. Advanced Types

Advanced types combine multiple types.

## Union Type

Allows multiple possible types.

```typescript
let id: string | number;

id=101;

id="EMP101";
```

---

## Type Alias

Creates custom type names.

```typescript
type UserID = string | number;

let userId: UserID = 101;
```

---

## Literal Types

Restricts exact values.

```typescript
let status: "success" | "error";

status="success";
```

---

## Intersection Type

Combines multiple types.

```typescript
type Person={
    name:string
}

type Employee={
    salary:number
}

type Staff=Person & Employee;

const emp:Staff={
    name:"Sujit",
    salary:50000
};
```

---

# 5. Function Types

TypeScript allows defining parameter and return types.

Example:

```typescript
function add(a:number,b:number):number{
    return a+b;
}

console.log(add(10,20));
```

Output:

```txt
30
```

---

## Optional Parameter

```typescript
function greet(name?:string){

    console.log(name);
}
```

---

## Default Parameter

```typescript
function greet(name:string="Guest"){

    console.log(name);
}
```

---

## Rest Parameter

```typescript
function total(...numbers:number[]){

    console.log(numbers);
}
```

---

# Summary Table

| Category | Types |
|-----------|--------|
| Primitive Types | string, number, boolean, null, undefined, bigint, symbol |
| Object Types | object, array, tuple |
| Special Types | any, unknown, void, never |
| Advanced Types | union, literal, intersection, alias |
| Function Types | parameters, return types, optional, rest |

---

# Conclusion

TypeScript data types help developers write clean, maintainable, and error-free code by defining the structure of data before execution.