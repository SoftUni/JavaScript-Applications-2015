(function () {
	var rootUrl = 'https://api.parse.com/1/';
	var ajaxRequester = app.ajaxRequester.get();
	var dataPersister = app.dataPersister.get(rootUrl, ajaxRequester);
	var controller = app.controller.get(dataPersister);
		
	app.routes = Sammy(function () {
		var selector = '#wrapper';
		this.get('#/', function () {
			controller.loadHome(selector);
		});

		this.get('#/login', function () {
			controller.loadLogin(selector);
		});

		this.get('#/register', function () {
			controller.loadRegister(selector);
		});

		this.get('#/bookmarks', function () {
			controller.loadBookmarks(selector);
		});
	});

	app.routes.run('#/');
}())