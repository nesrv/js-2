window.onload = e => {

    const content = `<header>Logo</header><main>Text</main><footer>&copy; 2024</footer>`

    const app = document.getElementById('app')
    // const container = document.createElement('div')
    // container.className = 'container'
    // container.innerHTML = content

    const header = document.createElement('header')
    header.innerHTML = 'logo'
    const main = document.createElement('main')
    main.innerHTML = 'Text'
    const footer = document.createElement('footer')
    footer.innerHTML = '&copy; 2024'

    const fragment = document.createDocumentFragment()
    fragment.appendChild(header)
    fragment.appendChild(main)
    fragment.appendChild(footer)

    app.appendChild(fragment)

    // const footer = document.querySelector('footer')
    console.log(footer.childNodes[0].data, footer.childNodes[0].nodeValue, footer.innerText);

    const newText = document.createTextNode('<del>2</del>5')

    const newElement = document.createElement('div')
    newElement.appendChild(newText)

    footer.appendChild(newElement)

    footer.style.backgroundColor = '#a40'

    footer.style.opacity = 1

    const opcityAnimation = setInterval(() => {
        footer.style.opacity -= 0.01
        if (footer.style.opacity <= 0) {
            clearInterval(opcityAnimation)
            footer.style.display = 'none'
        }
    }, 50)

}