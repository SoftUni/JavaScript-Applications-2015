var app = app || {};

app.controller = (function() {
    function Controller(studentModel) {
        this._model = studentModel;
    }

    Controller.prototype.loadHome = function (selector) {
        app.homeView.load(selector);
    };

    Controller.prototype.loadLogin = function (selector) {
        app.loginView.load(selector);
    };

    Controller.prototype.loadRegister = function (selector) {
        app.registerView.load(selector);
    };

    Controller.prototype.loadStudents = function (selector) {
        this._model.getStudents()
            .then(function (data) {
                app.studentsView.load(selector, data);
            },
            function (error) {
                console.log(error);
            })
    };

    return {
        load: function (studentModel) {
            return new Controller(studentModel);
        }
    }
}());