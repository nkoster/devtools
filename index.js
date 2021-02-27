(_ => {
    const info = document.createElement('div')
    document.body.append(info)

    const style = 'color:white;font-size:22px;text-shadow:1px 1px black'

    const showLog = target => {
        console.clear()
        console.log('oh boy...%cDEVTOOLS!%c(:', style)
        console.log(`orientation is ${target.orientation}`)
        info.innerHTML = `<pre>devtools is ${target.isOpen ? 'open' : 'closed'}</pre>`
        if (target.orientation)
            info.innerHTML += `<pre>orientation is ${target.orientation}</pre>`
    }
    
    showLog(window.devtools)
    
    window.addEventListener('devtoolschange', evt => showLog(evt.detail))
})()
