var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var nodeMailer = require("nodemailer");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){

    //console.log("Hello world");
    res.render('index', {title:"Welcome"});

});
app.get('/about', function(req, res){

    //console.log("Hello world");
    res.render('about');

});
app.get('/contact', function(req, res){

    //console.log("Hello world");
    res.render('contact');

});

app.listen(3000);
console.log("Server is running on port 3000 .....");