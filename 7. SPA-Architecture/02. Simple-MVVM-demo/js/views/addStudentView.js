var app = app || {};

app.addStudentView = (function() {
    function render(selector, data) {
        $.get('templates/addStudent.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).append(output);
        }).then(function () {
            $('#name').val('');
            $('#grade').val('');
        }, function (error) {
            console.log(error.responseText);
        });
    }

    return {
        render: function (selector, data) {
            render(selector, data);
        }
    };
}());