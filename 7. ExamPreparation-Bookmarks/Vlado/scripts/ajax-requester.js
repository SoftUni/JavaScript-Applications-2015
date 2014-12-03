var app = app || {};

app.ajaxRequester = (function () {
	var makeRequest = function makeRequest(method, url, data) {
		var defer = Q.defer();

        if(data){
            data = JSON.stringify(data);
        }

		return $.ajax({
			type: method,
			url: url,
			contentType: 'application/json',
			data: data,
			success: function (data) {
				defer.resolve(data);
			},
			error: function (error) {
				defer.reject(error);
			}
		});

		return defer.promise;
	}

	function makeGetRequest(url) {
		return makeRequest('GET', url, null);
	}

	
	function makePostRequest(url, data) {
		return makeRequest('POST', url, data);
	}

	function makePutRequest(url, data) {
		return makeRequest('PUT', url, data, success, error);
	}

	function makeDeleteRequest(url) {
		return makeRequest('DELETE', url, {}, success, error);
	}

	return {
		get: makeGetRequest,
		post: makePostRequest,
		put: makePutRequest,
		delete: makeDeleteRequest
	}
}());