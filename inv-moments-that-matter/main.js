const path = require('path');
const {app, BrowserWindow} = require('electron');

function createMainWindow(){

    const mainWindow = new BrowserWindow({
        title: "MTM",
        width: 900,
        height: 800,
        x: 0,
        y: 0,
        //transparent: true,
        //frame: false
    });
    mainWindow.loadFile(path.join(__dirname, 'renderer/html/index.html'));
    mainWindow.setBackgroundColor('hsl(0, 0%, 56%)');
    mainWindow.webContents.openDevTools();
}
app.whenReady().then(() => {
    createMainWindow();
})