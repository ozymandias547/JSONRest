
var quotes = require("./fixtureData.js").loadQuoteFixtures();

exports.findAll = function(req, res) {
	res.json(quotes);
}

exports.findById = function(req, res) {
	if (req.params.id >= quotes.quotes.length || req.params.id < 0) {
		res.statusCode = 404;
		return res.send('Error 404: No quote found');
	}
	res.json(quotes.quotes[req.params.id]);
}

exports.findRandom = function(req, res) {
	res.json(quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]);
}

exports.deleteQuote = function(req, res) {
	quotes.quotes.splice(req.body.id, 1);
	res.json(true);
}

exports.addQuote = function(req, res) {
	if (!req.body.hasOwnProperty("author") || !req.body.hasOwnProperty("text")) {
		res.statusCode = 400;
		return res.send('Error 400: Post syntax incorrect');
	}
	quotes.quotes.push({author : req.body.author, text : req.body.text});
	res.json(true);
}

exports.updateQuote = function(req, res) {
	if (req.body.author) quotes.quotes[req.params.id].author = req.body.author
	if (req.body.text) quotes.quotes[req.params.id].text = req.body.text
	res.json(true)
}