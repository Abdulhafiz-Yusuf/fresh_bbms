const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const isDev = require('electron-is-dev');

//import for pdf outputting
const fs = require('fs');
const os = require('os');
const ipc = electron.ipcMain;
const shell = electron.shell;

let mainWindow;


function createWindow() {

    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: true,

        }
    });

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        // Open the DevTools.
        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
        mainWindow.webContents.openDevTools();
    }

    mainWindow.setMenu(null);
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});



// Code to Create PDF
ipc.on('print-to-pdf', event => {
    const pdfPath = path.join(os.tmpdir(), 'some-ducking-pdf.pdf');
    const win = BrowserWindow.fromWebContents(event.sender);

    win.webContents.printToPDF({}, (error, data) => {
        if (error) return console.log(error.message);

        fs.writeFile(pdfPath, data, err => {
            if (err) return console.log(err.message);
            shell.openExternal('file://' + pdfPath);
            event.sender.send('wrote-pdf', pdfPath);
        })

    })
});