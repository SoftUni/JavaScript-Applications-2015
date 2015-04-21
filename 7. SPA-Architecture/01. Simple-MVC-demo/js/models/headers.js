var app = app || {};

app.headers = (function() {
    function Headers(applicationId, restAPIKey) {
        this.appId = applicationId;
        this.restAPIKey = restAPIKey;
    }

    Headers.prototype.getHeaders = function () {
        var headers = {
            'X-Parse-Application-Id': this.appId,
            'X-Parse-REST-API-Key': this.restAPIKey,
            'X-Parse-Master-Key' : this.masterKey,
            'Content-Type': 'application/json'
        };

        if (sessionStorage['logged-in']) {
            headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
        }

        return headers;
    };

    return {
        load : function (applicationId, restAPIKey) {
            return new Headers(applicationId, restAPIKey);
        },
        getCustomHeaders: function (appId, restKey, masterKey) {
            var headers = {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': restKey,
                'X-Parse-Master-Key' : masterKey,
                'Content-Type': 'application/json'
            };

            if (sessionStorage['logged-in']) {
                headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
            }

            return headers;
        }
    }
}());