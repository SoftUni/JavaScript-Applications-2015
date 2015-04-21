var app = app || {};

app.addStudentView = (function() {
    function render(selector, data) {
        $.get('templates/addStudent.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).append(output);
        }).then(function () {
            $('#name').val('');
            $('#grade').val('');
        })
    }

    return {
        render: function (selector, data) {
            render(selector, data);
        }
    };
}());