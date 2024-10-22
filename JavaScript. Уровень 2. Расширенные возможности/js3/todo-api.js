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

/**
 * @link http://localhost:3000/todo
 * @method GET
 */
const list = () => {
    return data
}

/**
 * @link http://localhost:3000/todo/:id
 * @method GET
 */
const task = (id) => {
    const founded = data.find(v => v.id === +id)
    
    return founded ?? false
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

    return data
}


export { list, task, create }