class Basket {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotalValue() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    showBasket() {
        this.items
            .map((product, i) => `${i + 1}. ${product.name} - ${product.price.toFixed(2)}zł`)
            .forEach((line) => console.log(line));
    }

    removeItem(no){
        this.items.splice(no - 1, 1);
    }
}

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }

    SetNewPrice(newPrice) {
        this.price = newPrice;
    }
}


const shopBasket = new Basket();

const oranges = new Product('Pomarańcze',8);
const cucumbers = new Product('Ogórek',10);

shopBasket.addItem(oranges);
shopBasket.addItem(cucumbers);
shopBasket.addItem(cucumbers);

shopBasket.showBasket();
console.log(shopBasket.getTotalValue());
shopBasket.removeItem(3);
shopBasket.showBasket();
console.log(shopBasket.getTotalValue());