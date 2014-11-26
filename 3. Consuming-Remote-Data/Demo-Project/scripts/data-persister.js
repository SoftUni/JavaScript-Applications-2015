var application = application || {};

application.data = (function () {
	function Data(rootUrl) {
		this.rootUrl = rootUrl;
		this.students = new Students(rootUrl);
		// this.schools = new Schools();
	}

	function Students(rootUrl) {
		this.serviceUrl = rootUrl + 'students/';
	}

	Students.prototype.getAll = function (success, error) {
		return ajaxRequester.get(this.serviceUrl, success, error);
	}

	Students.prototype.add = function (student, success, error) {
		return ajaxRequester.post(this.serviceUrl, student, success, error);
	}

	Students.prototype.remove = function (id, success, error) {
		return ajaxRequester.delete(this.serviceUrl + id, success, error);
	}

	return {
		get: function (rootUrl) {
			return new Data(rootUrl);
		} 
	}
}());