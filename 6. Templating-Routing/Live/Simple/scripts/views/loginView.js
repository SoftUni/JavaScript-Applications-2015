var app = app || {};

app.loginView = (function() {
    function LoginView(selector, data) {
        $.get('templates/login.html', function(template) {
            var output = Mustache.render(template);
            $(selector).html(output);
            $('#login').click(function (app) {
                app.controller.getHomePage(selector);
            });
        })
    }

    return {
        load: function (selector, data) {
            return new LoginView(selector, data);
        }
    }
}());