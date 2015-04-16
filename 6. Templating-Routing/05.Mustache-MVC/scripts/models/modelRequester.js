var app = app || {};

app.requester = (function () {
    function Requester() {

    }
    Requester.prototype.get = function (url) {
        var defer = Q.defer();

        var headers = {
            'X-Parse-Application-Id' : 'bJOanga8OB5IsGPzYW8C4ivKVDbZF1sd2hNrAO6z',
            'X-Parse-REST-API-Key' : 'Isczn96UnuG8CcdaIJYbsI68AeYCqiM1NutbKvCf'
        };

        $.ajax({
            url:url,
            method: 'GET',
            contentType: 'application/json',
            headers: headers,
            success: function (data) {
                defer.resolve(data);
            },
            error: function (error) {
                defer.reject(error);
            }
        });

        return defer.promise;
    };

    return {
        load: function () {
            return new Requester();
        }
    }
}());