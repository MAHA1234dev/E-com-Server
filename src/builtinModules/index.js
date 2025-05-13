const path = require('path');

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

// console.log(path.format(path.parse(__filename)));
// console.log(path.format(path.parse(__dirname)));

// console.log(path.isAbsolute(__filename));

// console.log(path.isAbsolute(__dirname));

// console.log(path.isAbsolute('./data.js'));  /// ./is relative

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "/folder2", "/index.html"));
console.log(path.join("/folder1", "//folder2", "/index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));



console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "/index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));


//Callbacks

function greet(name) {
    console.log(`hello ${name}`);
}

function greetFun(callback) {
    const name = "Mahadev";
    callback(name)
}


console.log(greetFun(greet));

