var app = app || {};

app.controller = (function () {
	function Controller(dataPersister) {
		this._dataPersister = dataPersister;

	}

	Controller.prototype.loadHome = function (selector) {
		var _this = this;
		$.get('templates/home.html', function (data) {
			$(selector).html(data);
		});
	}

	Controller.prototype.loadLogin = function (selector) {
		$.get('templates/login.html', function (data) {
			$(selector).html(data);
		});
	}

	Controller.prototype.loadRegister = function (selector) {
		$.get('templates/register.html', function (data) {
			$(selector).html(data);
		});
	}

	Controller.prototype.loadBookmarks = function (selector) {
		this._dataPersister.bookmarks.getAll()
			.then(function (data) {
				$.get('templates/bookmarks.html', function (template) {
					var output = Mustache.render(template, data);
					$(selector).html(output);
				})
			});
	}

	Controller.prototype.attachEventHandlers = function () {
		attachLoginHandler.call(this);
		attachRegisterHandler.call(this);
	}

	function attachLoginHandler() {
		var _this = this;
		$('#wrapper').on('click', '#login-btn', function (e) {
			var username = $('#username').val();
				password = $('#password').val();
			_this._dataPersister.users.login(username, password)
				.then(function (data) {
					console.log(data);
				});
		});
	}

	function attachRegisterHandler() {
		var _this = this;
		$('#wrapper').on('click', '#register-btn', function (e) {
			var username = $('#username').val();
				password = $('#password').val();
			_this._dataPersister.users.register(username, password)
				.then(function (data) {
					console.log(data);
				});
		});
	}

	return {
		get: function (dataPersister) {
			return new Controller(dataPersister);
		}
	}
}())