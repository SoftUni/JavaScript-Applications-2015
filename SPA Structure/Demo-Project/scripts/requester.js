var ajaxRequester = (function () {
	var makeRequest = function (method, url, data, success, error) {
		$.ajax({
			url: url,
			type: method,
			contentType: 'application/json',
			data: JSON.stringify(data) || undefined,
			success: success,
			error: error
		});
	}

	var makeGetRequest = function (url, success, error) {
		return makeRequest('GET', url, null, success, error);
	}

	var makePostRequest = function (url, data, success, error) {
		return makeRequest('POST', url, data, success, error);
	}

	var makePutRequest = function (url, data, success, error) {
		return makeRequest('PUT', url, data, success, error);
	}

	var makeDeleteRequest = function (url, success, error) {
		return makeRequest('DELETE', url, null, success, error);
	}

	return {
		get: makeGetRequest,
		post: makePostRequest,
		put: makePutRequest,
		delete: makeDeleteRequest
	}
}());