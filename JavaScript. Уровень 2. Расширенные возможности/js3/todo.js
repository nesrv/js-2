const data = [
    {
        id: 1,
        title: 'todo 1',
    },
    {
        id: 2,
        title: 'todo 2',
    },
    {
        id: 3,
        title: 'todo 3',
    },
    {
        id: 4,
        title: 'todo 4',
    },
]

const todoRouter = (req, res, url, jsonData) => {

    /**
     * @link http://localhost:3000/todo
     * @method GET
     */
    const list = () => {
        res.end(JSON.stringify(data))
    }

    /**
     * @link http://localhost:3000/todo/:id
     * @method GET
     */
    const task = (id) => {
        const founded = data.find(v => v.id === +id)
        if (!founded) {
            res.statusCode = 404
            res.end('Resource not Found')
            return
        }

        res.end(JSON.stringify(founded))
    }

    /**
     * @link http://localhost:3000/todo
     * @method POST
     * @body {title: string}
     */
    const create = (props) => {
        data.push({
            ...props,
            id: data.length,
        })
    }

    if (req.method === 'GET') {
        if (url.length === 0)
            list()
        if (url.length === 1)
            task(url[0])
    }

    if (req.method === 'POST') {
        if (url.length === 0)
            create(jsonData)
    }

    // res.end('finish')
}

export { todoRouter }