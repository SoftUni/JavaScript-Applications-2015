var app = app || {};

app.controller = (function () {
	function BaseController(data) {
		this._data = data;
	}

	BaseController.prototype.loadHome = function (selector) {
		$(selector).load('./templates/home.html');
	}

	BaseController.prototype.loadLogin = function (selector) {
		$(selector).load('./templates/login.html');
	}

	BaseController.prototype.loadRegister = function (selector) {
		$(selector).load('./templates/register.html');
	}

	BaseController.prototype.loadBookmarks = function (selector) {
		
	}

	return {
		get: function (data) {
			return new BaseController(data);
		}
	}
}())