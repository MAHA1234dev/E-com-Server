// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.status(200).send('Welcome to express js project');
// })

// app.get('/about', (req, res) => {
//     res.send('Welcome to my website')
// })

// app.all('*', (req, res) => {
//     res.status(404).send("<h1>Resource not found! fuck you you are requesting with the wrong url</h1>")
// })

// app.listen(5000, () => {
//     console.log('Server is running o port no 5000');
// })


//******* HTML file static middleware ß  ******** */

// const express = require('express');
// const path = require('path');
// const app = express();
// //middleware
// app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'navabar','index.html'))
// })
// app.all('*', (req, res) => {
//     res.status(404).send("Resource not found"); // small typo fix: 'Resource'
// });

// app.listen(5000, () => {
//     console.log("Server is running on port no 5000");
// })


////************  sending res json to client ***************** */

// const express = require('express');
// const products = require('./data/products')
// const app = express();


// app.get('/', (req, res) => {
//     // res.json([{ name: "Mahadev" }, { name: "yash" }])
//     res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
// })

// ///Products sending particular keys
// app.get('/api/products', (req, res) => {
//     const productsCopy = products.map((product) => {
//         const { name, price, id } = product
//         return { name, price, id }
//     })
//     res.json(productsCopy);
// })


// /// dfrtching dynamin products
// app.get('/api/products/:productId', (req, res) => {
//     const { productId } = req.params
//     const singleProduct = products.find((product) => product.id === Number(productId))
//     if (!singleProduct) {
//         res.status(404).send("Product does Not Exist")
//     }
//     res.json(singleProduct)
// })

// //query params 
// app.get('/app/v1/query', (req, res) => {
//     console.log(req.query);
//     let sortedProducts = [...products];
//     const { search, limit } = req.query;
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         })
//     }
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, limit)
//     }
//     if (sortedProducts.length < 1) {
//         return res.status(200).json({ success: true, data: [] })
//     }
//     res.status(200).json(sortedProducts);
// })

// app.listen(5000, () => {
//     console.log('Server is listening on port 5000');
// })



///************** Req ==>  Middleware (logger) ===> res  ********************* */

// const express = require('express');
// const app = express();
// const morgan =  require('morgan');
// const logger = require('./logger');
// const authorize = require('./authorize');

// //this is one way of using middleware  it will effect all the routes
// // app.use([logger, authorize])
// app.use(morgan('tiny'))

// app.get('/', logger, (req, res) => {
//     res.send("home Page")
// })

// app.get('/about', logger, (req, res) => {
//     res.send('about page')
// })

// app.get('/api/items', [logger, authorize], (req, res) => {
//     console.log(req.user, "items");
//     res.send('Items')
// })

// app.listen(5000, () => {
//     console.log('Liestenning the port no 5000');
// })



///********** post method and get  ************ */
const express = require('express');
const app = express();
let { people } = require('./data/products')


app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})


app.listen(5000, () => {
    console.log("Server is running on port no 5000");
})