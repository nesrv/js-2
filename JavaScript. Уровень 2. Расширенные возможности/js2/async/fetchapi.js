window.addEventListener('load', () => {

    const parseRequest = text => {
        const divElement = document.createElement('div')
        divElement.innerHTML = text
        document.body.appendChild(divElement)
    }

    document.getElementById('btnSendRequest').addEventListener('click', () => {

        fetch('https://swapi.dev/api/planets/1/', {
            method: 'get',
            mode: 'same-origin',
        })
            .then(response => {
                if (response.ok || response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {
                parseRequest(data.name)
                console.log(data);
            })
            .catch(console.error)

    })

})