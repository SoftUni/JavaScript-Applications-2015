(function () {
	var rootUrl = 'http://localhost:3000/';
	var dataPersister = app.dataPersister.get(rootUrl);
	var controller = app.controller.get(dataPersister);
	controller.load('#wrapper');
}())