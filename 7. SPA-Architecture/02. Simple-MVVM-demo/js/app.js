var app = app || {};

(function() {
    var appId = 'bJOanga8OB5IsGPzYW8C4ivKVDbZF1sd2hNrAO6z';
    var restAPIKey = 'Isczn96UnuG8CcdaIJYbsI68AeYCqiM1NutbKvCf';

    var headers = app.headers.load(appId, restAPIKey);
    var requester = app.requester.load();
    var model = app.studentDataModel.load('https://api.parse.com/1/', requester, headers);
    var controller = app.studentsViewModel.load(model);

    app.router = Sammy(function () {
        var selector = '#app';

        this.get('#/students', function () {
            controller.loadStudents(selector);
        });
    });

    app.router.run('#/students');
}());