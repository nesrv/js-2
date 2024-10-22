window.onload = e => {
    for (let i = 0; i < document.styleSheets.length; i++) {
        let sheet = document.styleSheets[i]
        console.log(sheet.cssRules)
        sheet.insertRule('main { padding: 20px; }')
        console.log(sheet.cssRules)
        
    }

    


}