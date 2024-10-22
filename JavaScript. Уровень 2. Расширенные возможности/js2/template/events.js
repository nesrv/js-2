window.addEventListener('load', () => {

    const inputHandle = function () {
        console.log(this.value)
    }

    document.getElementById('btnClick')
        ?.addEventListener('click', function (event) {
            console.log('button clicked')
            // this.setAttribute('disabled', true)

            document.removeEventListener('keydown', inputHandle)
            // event.stopPropagation()
            console.log(event.target.getAttribute('disabled'))
        })

    document.querySelector('input[name=address]')
        ?.addEventListener('keydown', inputHandle)

    document.getElementById('btnClick')
        ?.addEventListener('click', function (event) {
            console.log('once event')
        }, {
            once: true,
        })

    document.body.addEventListener('click', event => {
        console.log('body enevt')
        // event.preventDefault()
        // event.stopImmediatePropagation()
    }, {
        capture: true,
        once: true,
    })

    document.getElementById('btnClick').addEventListener('click', event => {
        document.getElementById('popup').style.display = 'flex'
    })

    document.getElementById('popup').addEventListener('click', event => {
        event.currentTarget.style.display = 'none'
    })

    document.querySelector('#popup .popup-header').addEventListener('click', event=>{
        event.stopPropagation()
        // ...
    })


})