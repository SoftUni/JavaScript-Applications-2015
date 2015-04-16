var app = app || {};

app.registerView = (function() {
    function RegisterView(selector, data) {
        $.get('templates/register.html', function(template) {
            var output = Mustache.render(template);

            $(selector).html(output);
        })
    }

    return {
        load: function (selector, data) {
            return new RegisterView(selector, data);
        }
    }
}());
