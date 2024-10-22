window.onload = e => {
    const header = document.getElementById('header')
    const footer = document.getElementById('footer')
    const main = document.getElementById('main')
    const app = document.getElementById('app')
    const menu = document.getElementById('menu')
    const li = menu.childNodes[0]
    console.log(li)
    const menuList = ['main', 'about', 'contacts']
    menuList.forEach(x => {
        const copyLi = li.cloneNode(true)
        // copyLi.nodeValue = x
        menu.appendChild(copyLi)
    })

    app.appendChild(header)
    app.appendChild(main)
    app.appendChild(footer)

    setTimeout(() => { app.removeChild(footer) }, 3000)

    setTimeout(() => {
        for (let i = 0; i < document.images.length; i++) {
            // document.images.item(i).setAttribute('src', document.images.item(i).getAttribute('data-src'))
        }
    }, 1500)


    const liElement = document.querySelector('#menu > li')
    console.log(liElement, liElement.id, liElement.className, liElement.tagName);

    const imgs = document.querySelector('body').querySelector('img')
    console.log(imgs);

    const newElement = document.createElement('div')
    newElement.setAttribute('data-auto', 'true')
    newElement.innerHTML = 'Hi'
    newElement.className = 'container'
    main.appendChild(newElement)

}