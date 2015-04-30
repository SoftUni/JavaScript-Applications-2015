var app = app || {};

app.headers = (function() {
    function Headers(applicationId, restAPIKey) {
        this.appId = applicationId;
        this.restAPIKey = restAPIKey;
    }

    Headers.prototype.getHeaders = function (useSessionToken) {
        var headers = {
            'X-Parse-Application-Id': this.appId,
            'X-Parse-REST-API-Key': this.restAPIKey,
            'Content-Type': 'application/json'
        };

        if (sessionStorage['sessionToken'] && useSessionToken) {
            headers['X-Parse-Session-Token'] = sessionStorage['sessionToken'];
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

            if (sessionStorage['sessionToken']) {
                headers['X-Parse-Session-Token'] = sessionStorage['sessionToken'];
            }

            return headers;
        }
    }
}());