$(function () {
	App.collection = new App.Collections.Articles()
	App.articlesView = new App.Views.Articles({collection: App.collection})
	App.articleModalView = new App.Views.ArticleModal();
})

var App = {
	Models: {},
	Views: {},
	Collections: {}
};