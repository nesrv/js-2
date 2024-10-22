window.onload = e => {
    console.log(document.nodeType, Node.DOCUMENT_NODE)

    function hideComment(element) {
        if (element.nodeType === Node.TEXT_NODE) {
            console.log(element.nodeValue)
        }
    }

    hideComment(document.body.childNodes[0].parentNode)

    console.log(document.body.childNodes[0].nextSibling, 
        document.body.childNodes[0].previousSibling)
}

