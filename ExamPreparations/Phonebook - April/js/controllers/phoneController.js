var app = app || {};

app.phoneController = (function () {
    function PhoneController(model, views) {
        this.model = model;
        this.viewBag = views;
    }

    PhoneController.prototype.loadAddPhoneView = function(selector) {
        this.viewBag.addPhone.addPhoneView(selector);
    };

    PhoneController.prototype.loadPhoneView = function(selector, urlParams, action) {
        var data = urlParams.split('&');
        var outData = {
            id : data[0].split('id=')[1],
            person: data[1].split('person=')[1],
            number: data[2].split('number=')[1]
        };

        if(action === 'delete') {
            this.viewBag.deletePhone.deletePhoneView(selector, outData);
        } else {
            this.viewBag.editPhone.editPhoneView(selector, outData);
        }
    };

    PhoneController.prototype.listAllPhones = function (selector) {
        var _this = this;

        return this.model.listAllPhones()
            .then(function (data) {
                _this.viewBag.listPhones.loadPhonesView(selector, data);
            }, function (error) {
                console.log(error);
            })
    };

    PhoneController.prototype.addPhone = function (person, number) {
        return this.model.addPhone(person, number)
            .then(function() {
                window.location.replace('#/phones/');
            }, function(error) {
                console.log(error);
            })
    };

    PhoneController.prototype.editPhone = function (phoneId, person, number) {
        return this.model.editPhone(phoneId, person, number)
            .then(function() {
                window.location.replace('#/phones/');
            }, function(error) {
                console.log(error);
            })
    };

    PhoneController.prototype.deletePhone = function (phoneId) {
        return this.model.deletePhone(phoneId)
                    .then(function() {
                        window.location.replace('#/phones/');
                    }, function(error) {
                        console.log(error);
                    })
    };

    return {
        load: function (model, views) {
            return new PhoneController(model, views);
        }
    }
}());