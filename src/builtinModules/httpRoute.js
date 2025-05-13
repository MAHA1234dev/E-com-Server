const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Welcome to home")
    } else if (req.url === "/bedroom") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(" this is the bedroom")
    } else if (req.url === "/api") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            name: "Mahadev",
            lastName: "Nidode"
        }))
    } else {
        res.writeHead(404);
        res.end("Page not found")
    }
});


server.listen(3000, (() => {
    console.log('Server is running on the 3000 port');
}))