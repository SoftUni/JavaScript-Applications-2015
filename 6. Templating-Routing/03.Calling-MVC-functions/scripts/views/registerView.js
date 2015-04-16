var app = app || {};

app.registerView = (function() {
    function RegisterView(selector) {
        $(selector).empty();

        var usernameLabel = $('<label/>');
        usernameLabel.attr('for', 'username');
        usernameLabel.text('Username:');

        var username = $("<input type['text'] id='username'/>");
        var passwordLabel = $('<label/>');
        passwordLabel.attr('for', 'password');
        passwordLabel.text('Password:');

        var password = $("<input type['password'] id='password'/>");
        var repeatPassLabel = $('<label/>');
        repeatPassLabel.attr('for', 'repeat-pass');
        repeatPassLabel.text('Repeat password:');

        var repeatPass = $("<input type['password'] id='repeat-pass'/>");
        var submit = $('<button>').text('Register');

        $(selector).append(usernameLabel)
            .append(username)
            .append(passwordLabel)
            .append(password)
            .append(repeatPassLabel)
            .append(repeatPass)
            .append(submit);

        $(selector).css('width', '150px');
    }

    return {
        load: function (selector) {
            new RegisterView(selector);
        }
    }
}());