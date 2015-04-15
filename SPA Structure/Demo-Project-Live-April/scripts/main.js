var app = app || {};

(function() {
    var model = app.models.loadModels('https://api.parse.com/1/classes/');
    var viewModel = new app.viewModel.loadViewModel(model);
    viewModel.showAllStudents();
}());