var app = app || {};

app.data = (function () {
	function Data (baseUrl, ajaxRequester) {
		this.users = new Users(baseUrl, ajaxRequester);
		this.bookmarks = new Bookmarks(baseUrl, ajaxRequester);
	}

	var Users = (function (argument) {
		function Users(baseUrl, ajaxRequester) {
			this._serviceUrl = baseUrl;
			this._ajaxRequester = ajaxRequester;
		}

		Users.prototype.login = function (argument) {
			// body...
		}

		Users.prototype.register = function (argument) {
			// body...
		}

		Users.prototype.validateToken = function (argument) {
			// body...
		}

		return Users;
	}());

	var Bookmarks = (function (argument) {
		function Bookmarks(baseUrl, ajaxRequester) {
			this._serviceUrl = baseUrl;
			this._ajaxRequester = ajaxRequester;
		}

		Bookmarks.prototype.getAll = function (argument) {
			// body...
		}

		Bookmarks.prototype.add = function (argument) {
			// body...
		}

		Bookmarks.prototype.delete = function (argument) {
			// body...
		}

		return Bookmarks;
	}());

	return {
		get: function (baseUrl, ajaxRequester) {
			return new Data(baseUrl, ajaxRequester);
		}
	}
}());