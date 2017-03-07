# JS assignments

## Contents
* [Install](#install)
* [Hello World](#hello-world)
* [Use strict and var](#use-strict-and-var)
* [Array](#array)
* [Flow](#flow)
* [Simple function](#simple-function)
* [Async](#async)
* [Objects](#objects)
* [Class](#class)
* [jQuery AJAX](#jquery-ajax)


## Install:
* Install [node.js](https://nodejs.org/en/)
* In commandprompt type "npm install -g eslint" to install eslint
* Install [Visual Studio Code](https://code.visualstudio.com)
* In VS Code open Extensions (View-menu) and find/install "eslint" (remember to restart)
* If you like to use Git: Install [Git](https://git-scm.com/downloads) and [Clone](https://github.com/devcronberg/jsa) repository (open commandprompt and type "git clone https://github.com/devcronberg/jsa.git")
* If you don't want Git just [download](https://github.com/devcronberg/jsa/archive/master.zip) the repository, and place the files in a folder somewhere called "jsa"
* Open the jsa-folder in VS Code
* Open Integrated terminal (View-menu)
* Type "npm install" (and wait....)
* Type "npm start" 
* Start coding 

---

## Hello world

This is a very simple assignment. Make sure index.html has a 
reference to `scripts/starter/005helloworld.js` and use
 console.log to write "hello from me" to the console. See
 if it works by typing "npm start" in console (ask the instrutor), and press F12 in the browser to see 
   the console-window.

### This is a perfect time to discuss

* "Getting started"
* Best practice javascript
* Debug
* Node
* NPM (scripts)
* Why use Chrome/Firefox/Edge
* Linter (ESLint)
* browser-sync
* Transpiler

Is ok to peek in the solution at [`scripts/solution/005helloworld.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/005HelloWorld.js).

--- 

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

### To discuss:

* javascript is typeless
* javascript has internal types
* typeof reveals the internal type
* use strict enforces declaration

Is ok to peek in the solution at [`scripts/solution/010var.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/010Var.js).

---

## Array
Make sure index.html has a reference to `scripts/starter/015array.js` and:
* Create an array a with the values 1,5,7,15,2,6,4
* log a to the console
* push a value to the array
* log a to the console
* pop a value to a variable by
* log b and a to the console
* sort the array
* log a to the console

View the console - you should get something like

![Image](https://cloud.githubusercontent.com/assets/13196981/20727793/36884c9e-b67b-11e6-9c60-f09b7650f1b8.png)

### To discuss:

* Chrome has a nice console ;)
* sort... ?? why is it in a weird order?
* When can we talk about all the neat methods like filter, map, slice and splice?
* Hmmm.... some methods like [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) was added to ES5 - what about older browsers?. Even worse - what about the neat [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method? It's a ES2015 method. Now what? Transpiler, linter, polyfill?   

Is ok to peek in the solution at [`scripts/solution/015array.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/015array.js).

---

## Flow

Make sure index.html has a reference to `scripts/starter/020flow.js`. Your job is to create this in the console:

![Image](https://cloud.githubusercontent.com/assets/13196981/20730015/bc5e923e-b684-11e6-91f8-e6986378a5d1.png)

Here is a few tips:

* use a for-loop in a for-loop 
* use the [padLeft-method](http://stringjs.com/#methods/padleft-len-char) from string.js to pad with spaces to create alignment. string.js is already referenced in index.html.

## To discuss
* Why use a js library - a padLeft should be easy to code - or??
* What other libraries could be useful

It's ok to peek in the solution at [`scripts/solution/020flow.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/020flow.js) before coding.   

---

## Simple function

Your job is to create two functions:

* includeVAT(amount, vat) [(1+vat) * amount]
* excludeVAT(amount, vat) [amount / (1+vat)]

You can choose two ways to solve the problem - a simple and a more advanced:

### The simple

Make sure index.html has a reference to `scripts/starter/024simplefunc.js` and create both functions. You need to make sure that the amount is a number. If not throw an error "wrong argument". Test the functions in the console.

### The more advanced

Make sure index.html has a reference to `scripts/starter/025simplefunc.js`. Create an object with the two functions as methods (see the starter file). The vat procentage is provided in the starter file. You need to make sure that the amount is a number. If not throw an error "wrong argument".

Test both functions in the console.

## To discuss

* Why "embed" the functions in an object?
* How the heck can both functions access the vat procentage?
* Can you access the checkAmount-function from outside the object? Is it "private"?

It's ok to peek in the solution at [`scripts/solution/024simplefunction.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/024simplefunction.js) or [`scripts/solution/025simplefunction.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/025simplefunction.js) before coding.   

---

## Async

Make sure index.html has a reference to `scripts/starter/040callback.js`. 

In the starter file you will find a function called getRandomNumber(max). It should create a random number 
between 1 and max and take [max] seconds/10 (that's why the function is using setTimeout):

```javascript
    function getRandomNumber(max) {
        setTimeout(function () {
            return Math.floor((Math.random() * max)) + 1;
        }, max * 100);
    }
    
    var res = getRandomNumber(10);
    console.log(res);
```

For some reason its failing (try for your self) - the function always returns undefined and it returns immediately and not after [max] seconds/10.

Your job is to fix the code so the function generates a random number after [max] seconds/10, and the number is logged to the console (and no - you can not console.log from inside the function :smile:).

## To discuss

* What is a callback function?
* You told us JavaScript only has one thread - how can anything be async then???
* Why can't I use async and await? (or can I ???)

It's ok to peek in the solution at [`scripts/solution/040callback.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/040callback.js) before coding.   

---

## Objects

Make sure index.html has a reference to `scripts/starter/050objects.js`. 

In this assignment you must create three objects - all of them contains two properties (firstname and lastname) and one method (fullname) that concatinates the two properties:

* The first object (o1) must be created with the [] syntax
* The second object (o2) must be created with the . syntax
* The third object (o3) must be created with the {} syntax
* Log all objects to the console and make sure the fullname-method works on all objects.
* Add all objects to a new array (a)
* Log the array to the console
* Create and log a JSON representation of the array to the console

## To discuss

* Are there any difference between [], . and {} syntax?
* JSON?? But thats for AJAX communication - right?
* AJAX????
* Can I add or remove members to objects on runtime??

It's ok to peek in the solution at [`scripts/solution/050objects.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/050objects.js) before coding.   

## Class
Make sure index.html has a reference to [`scripts/starter/050objects.js`](scripts/starter/050objects.js). 

Your job is to create an class Invoice with theese members:

* a constructor where _number (this._number) is initialized to 0, _lines (this._lines) is initialized to an empty array, and _date (this._date) is initialized to the current date
* a getter and a setter called number getting/setting this._number
* a method addLine() with an line-object as argument (ex { text:"", quantity: 5, price: 10}). The object must be added (pushed) to the this._lines array
* a method totalPrice() that return the total sum (quantity * price) of all lines
* Use this code to test the class

```
var f = new Invoice();
f.number = 1;
f.addLine({ text: "test1", price: 100, quantity : 2});
f.addLine({ text: "test2", price: 25, quantity : 200});

console.log(f.totalPrice(), f);
```
## To discuss
* private/public?
* browser support
* transpiler

## jQuery AJAX

Make sure index.html has a reference to `scripts/starter/090jqueryAjax.js`, and you have removed comments in the HTML so the DOM contains a textbox, a button, a list etc. 

* When the user clicks the button #myButton then...
* Find a value from the textbox #myText (if empty use 10)
* Use the $.getJSON to call http://fdemo2.cronberg.dk/random.ashx. Make sure you append an object with the property "antal" set to the value in the textbox (see getJSON spec at jQuery.com)
* Iterate through the data received and create an li-element for each item with content set to the guid from each object.
* Append the li-element to the ul-element (#myList)   

## To discuss

* jQuery is "just" a library to help you work with the DOM and do AJAX - you know that - right?
* Can you avoid using jQuery?
* Deferred objects/Promises? in jQuery? in ES6?
* XMLHttpRequest? and what the heck is fetch???

It's ok to peek in the solution at [`scripts/solution/090jqueryAjax.js`](https://github.com/devcronberg/jsa/blob/master/wwwroot/scripts/solution/090jqueryAjax.js) before coding.   


