var app = app || {};

app.controller = (function () {
	function Controller(dataPersister) {
		this.persister = dataPersister;
	}

	Controller.prototype.loadHome = function (selector) {
		var _this = this;

		this.persister.students.getAll()
			.then(function (data) {
				$.get('templates/partial.html', function (template) {
					var output = Mustache.render(template, data);
					$(selector).html(output);
				});
			},
			function (error) {
				console.log(error);
			});
	}

	return {
		get: function (dataPersister) {
			return new Controller(dataPersister);
		}
	}
}())