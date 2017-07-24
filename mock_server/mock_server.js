/* eslint-disable global-require */
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use('/fetchTest', (req, res) => {
    const result = require('./resource/test');
    res.json(result);
    res.end();
});

server.use('/getSKU', (req, res) => {
    const result = require('./resource/sku');
    let tempResult = JSON.stringify(result);
    tempResult = JSON.parse(tempResult);
    tempResult.data.SKU += (new Date()).getTime();
    res.json(tempResult);
    res.end();
});

server.use('/getCategories', (req, res) => {
    const result = require('./resource/categories');
    res.json(result);
    res.end();
});

server.use('/appendCategory', (req, res) => {
    const responseData = {
        result: 1
    };
    if (req.query.productCode === 'pengchuan') {
        responseData.result = 0;
        responseData.message = '商品编号已被占用.';
    }
    res.json(responseData);
    res.send();
});

server.use('/updateCategory', (req, res) => {
    const responseData = {
        result: 1
    };
    if (req.query.productCode === 'pengchuan') {
        responseData.result = 0;
        responseData.message = '商品编号已被占用.';
    }
    res.json(responseData);
    res.send();
});

server.use('/deleteCategory', (req, res) => {
    const responseData = {
        result: 1
    };
    res.json(responseData);
    res.send();
});

server.use('/getProductList', (req, res) => {
    const result = require('./resource/productList');
    res.json(result);
    res.end();
});

server.use('/getProductInfo', (req, res) => {
    const result = require('./resource/productInfo');
    res.json(result);
    res.end();
});

server.use('/setProductPrice', (req, res) => {
    const result = {
        result: 1,
        data: {}
    };
    res.json(result);
    res.send();
});

server.use(router);

server.listen(3000, () => {
    console.log(
        'Mock server is running on http://localhost:3000',
        '\n-----------------------------------------------'
    );
});
