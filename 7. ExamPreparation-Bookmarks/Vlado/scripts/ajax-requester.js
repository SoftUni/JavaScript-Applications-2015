var app = app || {};

app.ajaxRequester = (function () {
	function AjaxRequester() {
		this.get = makeGetRequest;
		this.post = makePostRequest;
		this.put = makePutRequest;
		this.delete = makeDeleteRequest;
	}

	var makeRequest = function makeRequest(method, url, data, headers) {
		var defer = Q.defer();

        if(data){
            data = JSON.stringify(data);
        }

		return $.ajax({
			type: method,
			url: url,
			headers: headers,
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

	function makeGetRequest(url, data, headers) {
		return makeRequest('GET', url, data, headers);
	}

	function makePostRequest(url, data, headers) {
		return makeRequest('POST', url, data, headers);
	}

	function makePutRequest(url, data, headers) {
		return makeRequest('PUT', url, data, headers);
	}

	function makeDeleteRequest(url, headers) {
		return makeRequest('DELETE', url, null, headers);
	}

	return {
		get: function () {
			return new AjaxRequester();
		}
	}
}());