var app = app || {};

app.userViews = (function() {
    function UserViews() {
        this.loginView = {
            loadLoginView: loadLoginView
        };
        this.registerView = {
            loadRegisterView: loadRegisterView
        };
        this.editProfileView = {
            loadEditProfileView: loadEditProfileView
        };
    }

    function loadLoginView (selector) {
        $.get('templates/login.html', function(template) {
            var outHtml = Mustache.render(template);
            $(selector).html(outHtml);
        }).then(function() {
            $('#loginButton').click(function() {
                var username = $('#username').val();
                var password = $('#password').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('login', {username: username, password: password});
                });

                /*Old way of calling the login function
                * but this method needs a dependency with controller*/
                //return controller.login(username, password);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();

    }

    function loadRegisterView (selector) {
        $.get('templates/register.html', function(template) {
            var outHtml = Mustache.render(template);
            $(selector).html(outHtml);
        }).then(function() {
            $('#registerButton').click(function() {
                var username = $('#username').val();
                var password = $('#password').val();
                var fullName = $('#fullName').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('register', {username: username, password: password, fullName: fullName});
                });

                /*Old way of calling the register function
                 * but this method needs a dependency with controller*/
                //return controller.register(username, password, fullName);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    function loadEditProfileView(selector, data) {
        $.get('templates/edit-profile.html', function(template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        }).then(function() {
            $('#editProfileButton').click(function() {
                var username = $('#username').val();
                var password = $('#password').val();
                var fullName = $('#fullName').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('editProfile', {username: username, password: password, fullName: fullName});
                });

                /*Old way of calling the edit profile function
                 * but this method needs a dependency with controller*/
                //return controller.editProfile(username, password, fullName);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    return {
        load: function() {
            return new UserViews();
        }
    }
}());