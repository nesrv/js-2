const hasPlugin = (name) => {
    for (let plug of window.navigator.plugins) {
        if (plug.name.indexOf(name) > -1) {
            return true
        }
    }
    return false
}

if (hasPlugin('PDF Viewer')) console.log('plugin set');

screen.orientation.onchange = e => {
    console.log('rotate', e)
}