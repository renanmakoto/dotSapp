const { app, BrowserWindow } = require('electron')

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36'

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
    })
    
    win.loadURL('https://web.whatsapp.com', { userAgent })
    // A webpage to be loaded

    return win

    // win.loadFile("./src/index.html")
    //An HTML file to be loaded
}

app.whenReady().then(()=> {
    createWindow()
})