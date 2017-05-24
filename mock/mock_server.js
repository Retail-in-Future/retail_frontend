const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router()
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/test', (req, res) => {
    const result = require('./resource/test')
    res.json(result);
    res.end()
});

server.use('/getSKU', (req, res) => {
    const result = require('./resource/sku');
    let tempResult = JSON.stringify(result);
    tempResult = JSON.parse(tempResult);
    tempResult.data.SKU += (new Date()).getTime();
    res.json(tempResult);
    res.end()
})

server.use('/getCategories', (req, res) => {
    const result = require('./resource/categories')
    res.json(result);
    res.end()
})

server.use('/appendCategory', (req, res) => {
    const result = {
        result: 1,
        data: {}
    };
    res.json(result);
    res.send();
})

server.use('/getProductInfo', (req, res) => {
    const result = require('./resource/productInfo')
    res.json(result);
    res.end()
})

server.use('/setProductPrice', (req, res) => {
    const result = {
        result: 1,
        data: {}
    };
    res.json(result);
    res.send();
})

server.use(router)

server.listen(3000, () => {
    console.log(
        'Mock server is running on http://localhost:3000',
        '\n-----------------------------------------------'
    )
})
