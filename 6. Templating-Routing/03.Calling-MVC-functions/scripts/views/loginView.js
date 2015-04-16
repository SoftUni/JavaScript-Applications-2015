var app = app || {};

app.loginView = (function() {
    function LoginView(selector) {
        $(selector).empty();

        var usernameLabel = $('<label/>');
        usernameLabel.attr('for', 'username');
        usernameLabel.text('Username:');

        var username = $("<input type['text'] id='username'/>");
        var passwordLabel = $('<label/>');
        passwordLabel.attr('for', 'password');
        passwordLabel.text('Password:');

        var password = $("<input type['password'] id='password'/>");
        var submit = $('<button>').text('Login');

        $(selector).append(usernameLabel)
            .append(username)
            .append(passwordLabel)
            .append(password)
            .append(submit);
        $(selector).css('width', '150px');
    }

    return {
        load: function (selector) {
            new LoginView(selector);
        }
    }
}());