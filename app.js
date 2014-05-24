
var express = require("express");
var quoteRoutes = require("./quoteRoutes.js");

var app = express();
var Db = require('mongodb').Db;

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'))

//Initial Routes
app.get("/", function(req, res) { res.sendfile(__dirname + '/public/views/index.html') });

//JSON RESTful API routes
app.post("/quotes", quoteRoutes.addQuote)
app.delete('/quotes/:id', quoteRoutes.deleteQuote)
app.get("/quotes/random", quoteRoutes.findRandom)
app.get("/quotes", quoteRoutes.findAll)
app.get("/quotes/:id", quoteRoutes.findById)
app.put("/quotes/:id", quoteRoutes.updateQuote)

console.log("Server listening on 8888");
app.listen(process.env.PORT || 8888);
