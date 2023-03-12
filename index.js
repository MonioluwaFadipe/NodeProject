//The main purpose of Node is to create a server thats going to "serve" pages to users.

var express = require('express') //import express
var ejs = require('ejs') //import ejs

/*ejs is "embedded Javascript" and it is a templating engine
that generates HTML code using pure JS. It performs similar
task as jinja in flask*/

var app = express(); //create an object of express

app.listen(8080); //specify port

//create a server
app.get('/', function(req,res){
    res.send("Hello"); //send data to the user 
})

/*the "function" parameter is the callback function
that is going to be used to return something to the user.
It takes to arguments "requests" - req and "results" - res
*/