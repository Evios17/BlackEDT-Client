const electron = require('electron')

const createWindow = (path) => {
    // const win = new BrowserWindow({
    //     width: 800,
    //     height: 600
    // })
    const win = new electron.BrowserWindow({
        fullscreen: true,
        x: -2560,
        y: 0
    })

    win.loadFile(path)
}

electron.app.whenReady().then(() => {
    createWindow('src/js/html/debug.html');

    console.log(electron.screen.getAllDisplays());
})