var app = app || {};

app.studentsView = (function() {
    function StudentsView(selector, data) {
        $(selector).empty();

        var ul = $('<ul/>');

        data.forEach(function(student) {
            var li = $('<li/>');
            li.html('Name: ' + student.name);
            li.append('<br/>Grade: ' + student.grade);
            ul.append(li);
        });

        $(selector).append(ul);
    }

    return {
        load: function (selector, data) {
            new StudentsView(selector, data);
        }
    }
}());