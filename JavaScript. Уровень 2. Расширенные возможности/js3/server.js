import express from 'express'
import { create, list, task } from './todo-api.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/todo/:id', (req, res) => {
    res.json(task(req.params.id))
})

app.get('/todo', (req, res) => {
    res.json(list())
})

app.post('/todo', (req, res) => {
    res.json(create(req.body))
})

app.use('/', (req, res) => {
    res.send('Hello')  // json redirect render
})

app.listen(3000)
