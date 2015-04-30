var app = app || {};

app.phoneModel = (function() {
    function PhoneModel(baseUrl, requester, headers) {
        this.serviceUrl = baseUrl + 'classes/Phone/';
        this.requester = requester;
        this.headers = headers;
    }

    PhoneModel.prototype.listAllPhones = function() {
        return this.requester.get(this.serviceUrl, this.headers.getHeaders(true));
    };

    PhoneModel.prototype.addPhone = function(person, number) {
        var userId = sessionStorage['userId'];
        var data = {
            person: person,
            number: number,
            ACL : {}
        };

        data.ACL[userId] = {"write":true,"read":true};

        return this.requester.post(this.serviceUrl, this.headers.getHeaders(true), data);
    };

    PhoneModel.prototype.editPhone = function(phoneId, person, number) {
        var data = {
            person: person,
            number: number
        };

        return this.requester.put(this.serviceUrl + phoneId, this.headers.getHeaders(true), data);
    };

    PhoneModel.prototype.deletePhone = function(phoneId) {
        return this.requester.remove(this.serviceUrl + phoneId, this.headers.getHeaders(true));
    };

    return {
        load: function(baseUrl, requester, headers) {
            return new PhoneModel(baseUrl, requester, headers);
        }
    }
}());