window.onload = () => {
    document.getElementById('back').onclick = e => {
        history.go(-1)
    }

    document.getElementById('forward').onclick = e => {
        window.history.pushState({}, '', '/cart')
    }

    history.replaceState({ id: 123 }, '', '/product/123')

    window.addEventListener('popstate', e => {
        // e.state
    })
}
