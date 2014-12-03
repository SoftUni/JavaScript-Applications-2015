(function () {
	var rootUrl = 'https://api.parse.com/1/';
	var ajaxRequester = app.ajaxRequester.get();
	var dataPersister = app.dataPersister.get(rootUrl, ajaxRequester);
	var controller = app.controller.get(dataPersister);
	controller.attachEventHandlers();

	app.routes = Sammy(function () {
		var selector = '#wrapper';
		this.get('#/', function () {
			// controller.loadHome(selector);
			$.get('templates/home.html', function (template) {
				$(selector).html(template);
			});
		});

		this.get('#/login', function () {
			//controller.loadLogin(selector);
			$.get('templates/login.html', function (template) {
				$(selector).html(template);
			});
		});

		this.get('#/register', function () {
			//controller.loadRegister(selector);
			$.get('templates/register.html', function (template) {
				$(selector).html(template);
			});
		});

		this.get('#/bookmarks', function () {
			//controller.loadBookmarks(selector);
			dataPersister.bookmarks.getAll()
				.then(function (data) {
					$.get('templates/bookmarks.html', function (template) {
						var output = Mustache.render(template, data);
						$(selector).html(output);
					})
				});
		});
	});

	app.routes.run('#/');
}())