const EventEmitter = require('events');
const Pizzashop = require('./pizza-shop');

const emitter = new EventEmitter();
const pizzashop = new Pizzashop();

pizzashop.on('order', (size, topping) => {
    console.log(`${size}, ${topping}`);
})

pizzashop.order('large', 'mushroom');
pizzashop.displayOrderNumber();

// emitter.on('Order-Pizza', (size, tapping) => {
//     console.log(`Oreder Received Baking a ${size} Pizza with the ${tapping}`);
// })

// emitter.on('Order-Pizza', (size) => {
//     if (size === "large") {
//         console.log(`Oreder Received Baking a ${size} Pizza with th`);
//     } else {
//         console.log("Small Pizza");
//     }
// })




emitter.emit('Order-Pizza', "small", "Mushrum");