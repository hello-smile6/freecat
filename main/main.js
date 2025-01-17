// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const { join } = require("path");
const path = require("path")
// const displays = require("displays")();
function createWindow() {
  // Create the browser window.
  // Avoid making window larger than display
  // let width=800;
  // let height=600;
  // if(displays[0].width<800) {
  //   width=displays[0].width;
  // }
  // if(displays[0].height<600) {
  // height=displays[0].height;
  // }
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webviewTag: true,
      preload: path.join(__dirname, "./preload.js"),
      preload: path.join(__dirname, "preload.js"),
      webviewTag: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(path.join(__dirname,"../index.html"));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow()

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
