const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.ordeNumber = 0
    }

    order(size, topping) {
        this.ordeNumber++
        this.emit("order", size, topping)
        // console.log(`${size} , ${topping}`);
    }

    displayOrderNumber() {
        console.log(`Order number is ${this.ordeNumber}`);
    }
}

module.exports = PizzaShop