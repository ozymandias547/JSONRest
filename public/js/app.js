App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("quotes", { path: "/" });
});

App.QuotesRoute = Ember.Route.extend({
	model: function() {
		return App.Quote.find();
	}
})

// //Initialize Store
App.Store = DS.Store.extend({
	revision : 12,
	adapter : 'DS.RESTAdapter'
})

//Model
App.Quote = DS.Model.extend({
	author : DS.attr("string"),
	text : DS.attr("string")
})
