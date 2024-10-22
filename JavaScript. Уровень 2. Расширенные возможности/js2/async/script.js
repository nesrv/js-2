const data = [
    {
        id: 1,
        name: 'aaa',
    },
    {
        id: 2,
        name: 'bbb',
    },
    {
        id: 3,
        name: 'ccc',
    },
    {
        id: 4,
        name: 'ddd',
    },
]

const getData = (cb = a => a) => {
    setTimeout(() => {
        const d = data
        cb(d)
    }, 50)
}

const datalog = data => console.log(data)

getData(datalog)

console.log('finish')

window.addEventListener('load', () => {

    const sendRequest = async () => {
        return new Promise((resolve, reject) => {
            console.log('start sendrequest');
            const request = new XMLHttpRequest()
            request.open('GET', 'https://swapi.dev/api/planets/1/')
            request.send()

            request.onload = () => {
                if (request.status === 200) {
                    console.log('finish sendrequest');
                    resolve(request.responseText)
                    return
                }
                reject('error')
            }
        })
    }

    const parseRequest = text => {
        const divElement = document.createElement('div')
        divElement.innerHTML = text
        document.body.appendChild(divElement)
    }

    document.getElementById('btnSendRequest').addEventListener('click', async () => {
        console.log('start event click');
        // sendRequest()
        //     .then(text => parseRequest(text))   // .then(parseRequest)
        //     .catch(console.error)  // .catch(e => console.error(e))
        //     .finally(() => {console.log('finish promise');})

        // const results = await sendRequest()
        // parseRequest(results)

        const p = sendRequest()
        p.then(parseRequest)
        p.catch(console.error)

        Promise.all([p]).then(results => {
            console.log(results);
        })

        Promise.race([p]).then(console.log)

        console.log('finish event click');
    })

})

