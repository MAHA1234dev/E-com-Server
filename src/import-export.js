//differnrt ways of exporting 
//1
const add = (a, b) => {
    return a + b
}

// module.exports = add

//2  return object with add pripert 
// module.exports.add = (a, b) => {
//     return a + b
// }


const substract = (a, b) => {
    return a - b
}

module.exports =  {
    add,
    substract
}