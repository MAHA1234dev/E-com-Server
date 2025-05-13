const fs = require('fs');
const zlib= require('zlib')

const gzip = zlib.createGzip()

const readabelStream = fs.createReadStream('./data.txt', {
    encoding: "utf-8",
    highWaterMark: 2
})

readabelStream.pipe(gzip).pipe(fs.WriteStream('./data2.txt.gz'))
const writeableStream = fs.createWriteStream('./data2.txt');

readabelStream.pipe(writeableStream)



// readabelStream.on('data', ((chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk)
// }))

