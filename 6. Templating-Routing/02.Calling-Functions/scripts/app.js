var app = app || {};

(function() {
    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.get('#/', function() {
            showHomeMenu(selector);
        });

        this.get('#/login', function() {
            showLoginMenu(selector);
        });

        this.get('#/register', function() {
            showRegisterMenu(selector);
        });

        this.get('#/students', function() {
            showStudents(selector);
        });
    });

    app.router.run('#/');
}());

function showHomeMenu(selector) {
    $(selector).empty();
    $('<p/>')
        .html('<h1>Welcome to our students site!</h1>')
        .appendTo(selector);
    $(selector).css('width', '100%');
}

function showLoginMenu(selector) {
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

function showRegisterMenu(selector) {
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

function showStudents(selector) {
    $(selector).empty();

    var ol = $('<ol/>');
    var students = ['Minka', 'Jichka', 'Stamat', 'Pesho', 'Gosho'];

    students.forEach(function(student) {
        var li = $('<li/>');
        li.text(student);
        ol.append(li);
    });

    $(selector).append(ol);
}