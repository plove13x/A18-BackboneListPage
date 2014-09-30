'use strict';


var booksToRead = [
{name: "Ball Four"},
{name: "Universal Principles of Design"},
{name: "How Things Work"},
{name: "Seeds of Time"},
{name: "The Subterraneans"},
{name: "On Human Understanding"},
{name: "Vagabonding"},
{name: "Bhagavad Gita"}
];


var BaseView = Backbone.View.extend({
  render: function(){
    $('body').append(this.el);
  }
});

var SearchView = BaseView.extend({
	tagName: 'input',
	attributes: {type: 'search', placeholder: 'search'},

	initialize: function() {
		
		// add this = that?
		this.$el.on('input', function() {
			var characters = $(this).val();
			var filteredList = _.filter(booksToRead, function(books) {
				return books.name.match(characters);
			});
			$("ul").html("");

			_.each(filteredList, function(book){
  					var itemView = new ItemView(book);
  					itemView.render();
				});
			console.log(filteredList);
		
			// if (this.val().match(characters)) {
			// 	var whatItShouldDo = "showCharacters";
			// }
		});
	}
});


var ListView = BaseView.extend({
  tagName: 'ul',
  className: 'bookList'
});

var ItemView = BaseView.extend({
  tagName: 'li',
  
  initialize: function(options) {
    this.name = options.name;
  },
  
  render: function(){
    this.$el.text(this.name);
    $('ul').append(this.el);
  }
});


var searchView = new SearchView();
searchView.render();

var listView = new ListView();
listView.render();

_.each(booksToRead, function(book){
  var itemView = new ItemView(book);
  itemView.render();
});