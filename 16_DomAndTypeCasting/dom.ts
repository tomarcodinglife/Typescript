console.log("Hello World!");

var headingElement = document.querySelector("h1");
console.log(headingElement?.textContent);
console.log(headingElement);

var SecondHeadingElement = document.querySelector("h2");
console.log(SecondHeadingElement?.innerText);


// without ? we can use ! to tell the compiler that we are sure that the element exists and it will not be null or undefined
var headingElement2 = document.querySelector("h1")!;
console.log(headingElement2.textContent);


// Type Casting is required when we want to access properties or methods of an element that are not available on the base type of the element. For example, if we want to access the textContent property of an HTMLHeadingElement, we need to cast the element to the correct type.
var headingElement3 = document.querySelector("h1") as HTMLHeadingElement;
console.log(`Type casting:  ${headingElement3.textContent}`);


