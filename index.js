"use strict"
const { app, BrowserWindow } = require('electron')

/* Todo:
 *	Make an omnibar.
 *	Add slogen banner.
 *	Activate almonts.
 * */

let win

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		icon:__dirname + './assets/img/favicon.ico',
		title: "legit browser",
		// frame: false,
		autoHideMenuBar:true,
		// transparent: true,
		// fullscreen: true,
		thickFrame: false,
		fullscreenable: true,
		})

	//win.setIgnoreMouseEvents(true)

	win.loadURL(`https://euphoria.io/`)

	// Opens the DevTools.
	// win.webContents.openDevTools()

	win.on('closed', _ => {
		win = null
	})

}

	// When the app is ready, call the createWindow function.
	app.on('ready', createWindow)

	// Quit when all windows are closed.
	app.on('window-all-closed', _ => {
		app.quit()
	})