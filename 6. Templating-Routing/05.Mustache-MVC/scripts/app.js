var app = app || {};

(function() {
    var requester = app.requester.load();
    var studentRepoModel = app.model.load('https://api.parse.com/1/', requester);
    var controller = app.controller.load(studentRepoModel);

    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.get('#/', function() {
            controller.loadHome(selector);
        });

        this.get('#/student/:id/:name', function() {
            console.log(this.params['id']);
            console.log(this.params['name']);
        });

        this.get('#/login', function() {
            controller.loadLogin(selector);
        });

        this.get('#/register', function() {
            controller.loadRegister(selector);
        });

        this.get('#/students', function() {
            controller.loadStudents(selector);
        });
    });

    app.router.run('#/');
}());