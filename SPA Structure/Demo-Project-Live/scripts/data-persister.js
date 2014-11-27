var app = app || {};

app.dataPersister = (function () {
	function Persister(rootUrl) {
		this.rootUrl = rootUrl;
		this.students = new Students(rootUrl);
		this.schools = new Schools(rootUrl);
	}

	var Students = (function () {
		function Students(rootUrl) {
			this.serviceUrl = rootUrl + 'students/';
		}

		Students.prototype.getAll = function (success, error) {
			return ajaxRequester.get(this.serviceUrl, success, error);
		}

		Students.prototype.add = function (student, success, error) {
			return ajaxRequester.post(this.serviceUrl, student, success, error);
		}

		Students.prototype.delete = function (id, success, error) {
			return ajaxRequester.delete(this.serviceUrl + id, success, error);
		}

		return Students;
	}());


	var Schools = (function () {
		function Schools(rootUrl) {
			this.serviceUrl = rootUrl + 'schools/'
		}

		return Schools;
	}());

	return {
		get: function (rootUrl) {
			return new Persister(rootUrl);
		}
	}
}());