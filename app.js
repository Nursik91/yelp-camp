/**
 * Created by Nursike on 11/18/2016.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon  creek", image: "http://cdn.playbuzz.com/cdn/00feef30-b267-490a-8be8-fee06f46333f/275827c3-1eac-4ffa-8fc0-e690468b5786.jpg"},
    {name: "Arizona Camp", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg"},
    {name: "Burabai Camp", image: "http://battenkillriversports.com/wp-content/uploads/2016/02/18f63e24-1637-4897-a973-b0b80f6bbc24.jpg"},
    {name: "Salmon  creek", image: "http://cdn.playbuzz.com/cdn/00feef30-b267-490a-8be8-fee06f46333f/275827c3-1eac-4ffa-8fc0-e690468b5786.jpg"},
    {name: "Arizona Camp", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg"},
    {name: "Burabai Camp", image: "http://battenkillriversports.com/wp-content/uploads/2016/02/18f63e24-1637-4897-a973-b0b80f6bbc24.jpg"},
    {name: "Salmon  creek", image: "http://cdn.playbuzz.com/cdn/00feef30-b267-490a-8be8-fee06f46333f/275827c3-1eac-4ffa-8fc0-e690468b5786.jpg"},
    {name: "Arizona Camp", image: "http://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg"},
    {name: "Burabai Camp", image: "http://battenkillriversports.com/wp-content/uploads/2016/02/18f63e24-1637-4897-a973-b0b80f6bbc24.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new");
});

app.listen('3000', function() {
   console.log("The YelpCamp Server Has Started!");
});