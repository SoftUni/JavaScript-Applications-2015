var app = app || {};

app.studentsView = (function() {
    function StudentsView(selector, data) {
        $(selector).empty();

        $.get('templates/students.html', function (template) {
            var output = Mustache.render(template, data);
            $(selector).append(output);
        });
    }

    return {
        load: function (selector, data) {
            new StudentsView(selector, data);
        }
    }
}());