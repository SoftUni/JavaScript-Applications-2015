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

		Students.prototype.getAll = function () {
			return ajaxRequester.get(this.serviceUrl);
		}

		Students.prototype.add = function (student) {
			return ajaxRequester.post(this.serviceUrl, student);
		}

		Students.prototype.delete = function (id) {
			return ajaxRequester.delete(this.serviceUrl + id);
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