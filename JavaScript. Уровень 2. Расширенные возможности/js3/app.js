import { Server } from 'http'
import { apiHome } from './router.js';
import url from 'url'
import { todoRouter } from './todo.js';

let jsonData = ''

const server = new Server((/*err,*/ req, res) => {

    const urlParsed = url.parse(req.url)
    console.log(urlParsed);

    const path = urlParsed.pathname.split('/')


    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500/')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET')
    res.setHeader('Access-Control-Max-Age', 2592000)

    req.on('data', data => {
        jsonData += data
        console.log(data);
    })

    req.on('end', () => {
        // res.end(JSON.stringify({
        //     data: `Hello. I'm API`,
        // }))
        if (path[1] === '')
            apiHome(req, res, jsonData)

        if (path[1] === 'todo')
            todoRouter(req, res, path.slice(2), jsonData)
    })

})

server.listen(3000, 'localhost')







// https://login:password@domain.ru:3333/api/v1/resource

// GET https://login:password@domain.ru:3333/api/v1/resource
// GET https://login:password@domain.ru:3333/api/v1/resource/123
// POST https://login:password@domain.ru:3333/api/v1/resource
// PUT https://login:password@domain.ru:3333/api/v1/resource/123
// DELETE https://login:password@domain.ru:3333/api/v1/resource/123

// CRUD(L)






// import {sum, sub} from './calc.js'
// const calc = require('./calc.js')
// const {sum, sub} = require('./calc.js')
// console.log(calc.sum(1, 2), calc.sub(4, 3))

// console.log(sum(1, 2), sub(5, 4));



