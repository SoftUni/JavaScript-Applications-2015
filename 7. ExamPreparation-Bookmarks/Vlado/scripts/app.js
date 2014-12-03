(function () {
	var rootUrl = 'http://localhost:3000/';
	var dataPersister = app.dataPersister.get(rootUrl);
	var controller = app.controller.get(dataPersister);
		
	app.sammy = Sammy('#wrapper', function () {
		this.get('#/', function () {
			controller.loadHome('#wrapper');
		});

		this.get('#/students', function () {
			controller.loadHome('#wrapper');
		});

		this.get('#/schools', function () {
			controller.loadHome('#wrapper');
		});

		this.get('#/contacts', function () {
			$('#wrapper').html('contacts')
		});
	});

	app.sammy.run('#/');
}())