const fs = require('fs/promises');

fs.readFile('./data.txt', 'utf-8').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


async function readFile() {
    try {
        const data = await fs.readFile('./data.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}


readFile();