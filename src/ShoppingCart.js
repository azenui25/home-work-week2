class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    getItems() {
        return this.cart;
    }
    addItem() {
        return this.cart = {
            name: "Trash can",
            quantity: 1,
            pricePerUnit: 15.5
        }
    }
    clear() {
        return this.cart = [];
    }
    total() {
        return this.cart
            .map(cart => cart.addItem())
            .reduce((a, b) => a + b, 0)


    }

}




module.exports = ShoppingCart