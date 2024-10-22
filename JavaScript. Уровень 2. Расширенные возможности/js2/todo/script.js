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

window.addEventListener('load', () => {

    const ul = document.getElementById('todo-list')
    const addBtn = document.getElementById('add-button')
    const createBlock = document.getElementById('create-form')
    const inputText = document.getElementById('titleInput')
    const printTitle = document.getElementById('printTitle')
    const saveButton = document.getElementById('saveButton')

    const showData = async () => {
        ul.innerHTML = ''
        data.forEach((value, index) => {
            const li = document.createElement('li')
            li.innerHTML = value.title
            li.setAttribute('data-id', value.id)
            li.setAttribute('key', index)
            ul.appendChild(li)
        })
    }

    const appendItemToTodo = async (itemText) => new Promise((resolve, reject) => {
        data.push({
            id: data.length,
            title: itemText,
        })
        resolve(true)
    })

    addBtn.addEventListener('click', event => {
        createBlock.classList.replace('d-none', 'd-block')
        // createBlock.classList.toggle('d-none')
    })

    inputText.addEventListener('input', event => {
        printTitle.innerText = event.target.value
    })

    saveButton.addEventListener('click', event => {
        event.preventDefault()

        appendItemToTodo(inputText.value)
            .then(result => result &&
                ((inputText.value = '') ||
                    (createBlock.classList.replace('d-block', 'd-none'))
                )
            )

        showData()
    })

    showData()

})