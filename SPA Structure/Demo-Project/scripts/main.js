(function () {
	var serviceRootUrl = 'http://localhost:5555/';
	var persister = application.data.get(serviceRootUrl);
	var controller = application.controller.get(persister);
	controller.load('#students');
}());