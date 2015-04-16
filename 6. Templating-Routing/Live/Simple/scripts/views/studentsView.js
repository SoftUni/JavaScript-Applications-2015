var app = app || {};

app.studentsView = (function() {
    function StudentsView(selector, data) {
        $.get('templates/students.html', function(template) {
            var output = Mustache.render(template, data);

            $(selector).html(output);
        })
    }

    return {
        load: function (selector, data) {
            return new StudentsView(selector, data);
        }
    }
}());