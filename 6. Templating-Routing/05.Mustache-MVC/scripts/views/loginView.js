var app = app || {};

app.loginView = (function() {
    function LoginView(selector) {
        $(selector).empty();

        $.get('templates/login.html', function (template) {
            var output = Mustache.render(template);
            $(selector).append(output);
        });

        $(selector).css('width', '150px');
    }

    return {
        load: function (selector) {
            new LoginView(selector);
        }
    }
}());