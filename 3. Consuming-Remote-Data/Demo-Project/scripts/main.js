(function () {
	var serviceRootUrl = 'http://localhost:3000/';
	var persister = application.data.get(serviceRootUrl);
	var controller = application.controller.get(persister);
	controller.load('#students');
}());