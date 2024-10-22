window.onload = e => {

    const timerFunc = timer(0)
    let t1 = null

    setTimeout(
        () => {
            console.log('start')
            t1 = setInterval(() => {
                timerFunc()
            }, 1000)
        }, 1000
    )

    setTimeout(()=>{
        clearInterval(t1)
    }, 7000)

}

const timer = start => {
    let value = start

    const increment = function () {
        value++
        console.log(value);
        return value
    }

    return increment
}