(_ => {
    const info = document.createElement('div')
    document.body.append(info)
    
    const showLog = target => {
        console.clear()
        console.log('Is DevTools open:', target.isOpen)
        console.log('DevTools orientation:', target.orientation)
        info.innerHTML = `<pre>devtools is ${target.isOpen ? 'open' : 'closed'}</pre>`
        if (target.orientation)
            info.innerHTML += `<pre>orientation is ${target.orientation}</pre>`
    }
    
    showLog(window.devtools)
    
    window.addEventListener('devtoolschange', evt => showLog(evt.detail))
})()
