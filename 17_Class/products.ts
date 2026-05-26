
class Product {
    productName:string;
    productPrice:number;
    productNumber:number;
    inCart:boolean = false;
    isOrderd:boolean = false;

    constructor(productName:string, productPrice:number, productNumber:number) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productNumber = productNumber;
    }

    addToCart(): void {
        this.inCart = true;
    }

    buyProduct(): void {
        if (this.inCart) {
            this.isOrderd = true;
            console.log(`${this.productName} has been ordered.`);
        } else {
            console.log(`${this.productName} is not in the cart. Please add it to the cart before buying.`);
        }   
    }  


    var product1 = new Product("Laptop", 999.99, 1);
    var product2 = new Product("Smartphone", 499.99, 2);

    product1.addToCart();
    product1.buyProduct();

    product2.buyProduct(); // This will show a message that the product is not in the cart. 





}