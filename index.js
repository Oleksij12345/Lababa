let path = require( "path")
let url = require( "url")
let {app, BrowserWindow} = require( "electron")

let win;

function createWindow() {
    win = new BrowserWindow({width: 700, height: 600})

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
    }))

    // win.webContents.openDevTools()
    win.on('close', function () {
        win = null;
    })
}

app.on('ready', createWindow)

