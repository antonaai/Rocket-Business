var express = require("express");
var app = express();

app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/about", function(req, res){
    res.render("about.ejs");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio.ejs");
});

app.get("/portfolio/imagegallery", function(req, res) {
    res.render("./portfolio/imageGallery.ejs");
});

app.get("/portfolio/loginform", function(req, res) {
    res.render("./portfolio/loginForm.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER ONLINE");
})