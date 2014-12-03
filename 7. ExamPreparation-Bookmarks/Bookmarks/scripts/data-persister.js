var app = app || {};

app.dataPersister = (function () {
	function Persister(rootUrl, ajaxRequester) {
		this.bookmarks = new Bookmarks(rootUrl, ajaxRequester);
		this.users = new Users(rootUrl, ajaxRequester);
	}

	var cradentials = (function () {
		var tokenKey = 'sessionToken',
			usernameKey = 'username',
			headers = {
				"X-Parse-Application-Id": "fE3pqGmdD8hKzNe2d1EKTSiarVHdh36uZZuO9nt8",
				"X-Parse-REST-API-Key": "Z7ZsZRRkYT5Caq20M3aqBlHZMFL6CQ8JrgnSI4Dc",
				"X-Parse-Session-Token": getSessionToken()
			};
			
		function getSessionToken() {
			return localStorage.getItem(tokenKey);
		}

		function setSessionToken(sessionToken) {
			localStorage.setItem(tokenKey, sessionToken);
		}

		function getUsername() {
			return localStorage.getItem(usernameKey);
		}

		function setUsername(username) {
			localStorage.setItem(username);
		}

		function clearCradentials() {
			localStorage.removeItem(usernameKey);
			localStorage.removeItem(tokenKey);
		}

		function getHeaders() {
			return headers;
		}

		return {
			getToken: getSessionToken,
			setToken: setSessionToken,
			getUsername: getUsername,
			setUsername: setUsername,
			clear: clearCradentials,
			getHeaders: getHeaders
		}
	}());
	
	var Users = (function () {
		function Users (rootUrl, ajaxRequester) {
			this._serviceUrl = rootUrl;
			this._ajaxRequester = ajaxRequester;
			this._headers = cradentials.getHeaders();
		}

		Users.prototype.validateToken = function () {
			return this._ajaxRequester.get(this._serviceUrl + 'users/me', null, this._headers)
		}

		Users.prototype.login = function (username, password) {
			// Hash username and password!
			var data = {
				username: username,
				password: password
			};

			return this._ajaxRequester.get(this._serviceUrl + 'login/', data, this._headers); 
		}

		Users.prototype.register = function (username, password) {
			var data = {
				username: username,
				password: password
			};

			return this._ajaxRequester.post(this._serviceUrl + 'users/', data, this._headers);
		}

		Users.prototype.logout = function () {
			// TODO: Implement
			cradentials.clear();
		}

		return Users;
	}())

	var Bookmarks = (function () {
		function Bookmarks(rootUrl, ajaxRequester) {
			this._serviceUrl = rootUrl + 'classes/Bookmark/';
			this._ajaxRequester = ajaxRequester;
			this._headers = cradentials.getHeaders();
		}

		Bookmarks.prototype.getAll = function () {
			return this._ajaxRequester.get(this._serviceUrl, null, this._headers);
		}

		Bookmarks.prototype.add = function (bookmark) {
			return this._ajaxRequester.post(this._serviceUrl, bookmark, this._headers);
		}

		Bookmarks.prototype.delete = function (id) {
			return this._ajaxRequester.delete(this._serviceUrl + id, null, this._headers);
		}

		return Bookmarks;
	}());

	return {
		get: function (rootUrl, ajaxRequester) {
			return new Persister(rootUrl, ajaxRequester);
		}
	}
}());