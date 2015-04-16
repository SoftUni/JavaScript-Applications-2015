var app = app || {};

app.registerView = (function() {
    function RegisterView(selector) {
        $(selector).empty();

        $.get('templates/register.html', function (template) {
            var output = Mustache.render(template);
            $(selector).append(output);
        });

        $(selector).css('width', '150px');
    }

    return {
        load: function (selector) {
            new RegisterView(selector);
        }
    }
}());