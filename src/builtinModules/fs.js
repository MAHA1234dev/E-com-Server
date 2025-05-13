const fs = require('fs');


const readContext = fs.readFileSync('./data.txt', 'utf-8');

console.log(readContext);

fs.readFile('./data.txt', 'utf-8', ((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}))

fs.writeFileSync('./greet.txt', "Greeting Mahadev")

fs.writeFile('./greet.txt', " Greeting from nidode family", { flag: 'a' }, ((err) => {
    if (err) {
        console.log(err);
    }
}))