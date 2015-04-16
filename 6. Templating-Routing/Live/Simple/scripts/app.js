var app = app || {};

(function() {
    var model = app.model.load('https://api.parse.com/1/');
    var controller = app.controller.load(model);

    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.get('#/', function () {
            controller.getHomePage(selector);
        });

        this.get('#/Login', function () {
            controller.getLoginPage(selector);
        });

        this.get('#/Register', function () {
            controller.getRegisterPage(selector);
        });

        this.get('#/Students', function () {
            controller.getStudentsPage(selector);
        });
    });

    app.router.run('#/');
}());