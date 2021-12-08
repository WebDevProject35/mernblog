const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded ({ extended: true}));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("home");
})

app.get("/compose", function(req, res){
  res.render("compose");
})

app.get("/contact", function(req, res) {
  res.render("contact");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server is started");
})
