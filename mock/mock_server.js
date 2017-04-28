const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router()
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/test', (req, res) => {
    const result = require('./resource/test')
    res.json(result)
    res.end()
})

server.use('/400', (req, res) => {

    res.end()
})


server.use(router)

server.listen(3000, () => {
    console.log('Mock server is running on http://localhost:3000')
})
