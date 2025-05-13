const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    const superHero = {
        name: "Bruce",
        LastName: "Wayne"
    }
    //***  res is text/plain  */
    // res.writeHead(200, {"content-type" : "text/plain"})
    // res.end('Welcome to the my fucking world');



    ///****  res is an object  ***** */

    // res.writeHead(200, {"content-type"  :"application/json"})
    // res.end(JSON.stringify(superHero))


    /////*****  res is an html   ****** */
    // res.writeHead(200, { "content-type": "text/html" })
    // res.end("<h1>Hello world</h1>");

    ///using fs read file html
    // const html = fs.readFileSync('./index.html', "utf-8")
    // res.writeHead(200, { "content-type": "text/html" })
    // res.end(html)


    ///using streams
    res.writeHead(200, { "content-type": "text/html" })
    fs.createReadStream('./index.html').pipe(res)

    //using html template dynamic values 
    const name = "Mahadev"
    res.writeHead(200, { "content-type": "text/html" })
    let html = fs.readFileSync('./index.html', "utf-8")
    html = html.replace("{{name}}", name)
    res.end(html)
})

server.listen(3000, () => {
    console.log("server is running on the port no 3000");
})