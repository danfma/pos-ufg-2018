const { app, BrowserWindow } = require('electron');

var mainWindow = null;

app.on('window-all-closed', function () {

    if (process.platform != 'darwin') {
        app.quit();
    }

});

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.openDevTools();

    mainWindow.on('closed', function () {

        mainWindow = null;
    });
}); 
