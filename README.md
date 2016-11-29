# JS assignments

## Install:
* Install [node.js](https://nodejs.org/en/)
* In commandprompt type "npm install -g eslint" to install eslint
* Install [Visual Studio Code](https://code.visualstudio.com)
* Install [Git](https://git-scm.com/downloads)
* In VS Code open Extensions (View-menu) and find/install "eslint" (remember to restart)
* [Clone](https://github.com/devcronberg/jsa) repository (open commandprompt and type "git clone https://github.com/devcronberg/jsa.git")
* Open the jsa-folder in VS Code
* Open Integrated terminal (View-menu)
* Type "npm install" (and wait....)
* Type "npm start" 
* Start coding 

## Hello world

This is a very simple assignment. Make sure index.html has a 
reference to `scripts/starter/005helloworld.js` and use
 console.log to write "hello from me" to the console. See
 if it works by typing "npm start" in console (ask the instrutor), and press F12 in the browser to see 
   the console-window.

This is a perfect time to discuss

* "Getting started"
* Best practice javascript
* Debug
* Node
* NPM (scripts)
* Why use Chrome/Firefox/Edge
* Linter (ESLint)
* browser-sync
* Transpiler

## Use strict and var
Make sure index.html has a reference to `scripts/starter/010var.js` and:

* Create a variable t and assign the value 1 (number)
* Log (console.log) the type with typeof(t)
* Assign the value "s" (string) to t
* Log (console.log) the type with typeof(t)
* Assign the value true (bool) to t
* Log (console.log) the type with typeof(t)
* Assign the value {} (new object) to t (we will cover {} later)
* Log (console.log) the type with typeof(t)
* Assign a value to a new variable without using var (like: g=1;). It should produce an error in the console. 

View the console - you should get something like

![Image](https://cloud.githubusercontent.com/assets/13196981/20727205/e4a1d316-b678-11e6-813a-b85849f4f2a0.png)

To discuss:

* javascript is typeless
* javascript has internal types
* typeof reveals the internal type
* use strict enforces declaration
