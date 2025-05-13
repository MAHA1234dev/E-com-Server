// const crypto = require('crypto');
const https = require('https')

const MAX_CALLs = 10
const start = Date.now();
for (let i = 0; i <= MAX_CALLs; i++) {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(`Request : ${i + 1}`, Date.now() - start);
        })
    })
    .end()
}

///******* libuv thread pool size 4   *********** */

// process.env.UV_THREADPOOL_SIZE = 4
// const MAX_CALLs = 5
// const start = Date.now();

// for(let i =0 ; i< MAX_CALLs; i++) {
//     crypto.pbkdf2('password', "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash : ${i + 1}`, Date.now() - start);
//     })
// }





///******** sync  */
// const start = Date.now();
// crypto.pbkdf2Sync('password', "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync('password', "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);