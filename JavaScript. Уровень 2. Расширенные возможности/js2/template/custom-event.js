window.addEventListener('load', () => {

    const customEvent = new Event('cstmevent', {
        bubbles: true,
        cancelable: false,
        composed: false,
    })

    document.getElementById('btnClick').addEventListener('cstmevent', event => {
        console.log(event)
    })

    document.querySelector('[name=address]').addEventListener('keyup', event => {
        if (event.target.value === 'run')
            document.getElementById('btnClick').dispatchEvent(customEvent)

        if (event.target.value === 'go') {
            const clickEvent = new Event('click', {
                clientX: 100,
                clientY: 100,
            })
            document.getElementById('btnClick').dispatchEvent(clickEvent)
        }

        if(event.target.value === 'ya') {
            const clickEvent = new Event('click')
            document.getElementById('submitForm').dispatchEvent(clickEvent)

            const submitEvent = new Event('submit')
            document.getElementById('yaForm').dispatchEvent(submitEvent)
        }

    })

})