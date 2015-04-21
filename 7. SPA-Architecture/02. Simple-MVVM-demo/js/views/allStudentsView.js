var app = app || {};

app.allStudentsView = (function() {
    function render(viewModel, selector, data) {
        var defer = Q.defer();
        $.get('templates/allStudents.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).html(output);
        })
            .then(function () {
                $('#addStudent').click(function () {
                    viewModel.addStudent('#students');
                });
                defer.resolve();
            }, function (error) {
                defer.reject(error.responseText);
            });

        return defer.promise;
    }

    return {
        render: function (viewModel, selector, data) {
            return render(viewModel, selector, data);
        }
    };
}());