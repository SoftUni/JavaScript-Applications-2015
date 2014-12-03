var app = app || {};

app.UI = (function () {
	var loginControl = (function () {
        function getUsernameText () {
            // return $("#login-username-input").val();
        }

        function getPasswordText () {
            // return $("#login-password-input").val();
        }

        function attachLoginButtonHandler(selector) {
        	$(selector).on('click', function (e) {
        		
        	});
        }

		return {
			getUsername: getUsernameText,
			getPassword: getPasswordText,
			attachButtonHandler: attachLoginButtonHandler
		};
	}());
	
	var registerControl = (function () {
        function getUsernameText () {
            // return $("#login-username-input").val();
        }

        function getPasswordText () {
            // return $("#login-password-input").val();
        }

        function attachRegisterHandlers(selector) {
        	$(selector).on('click', function (e) {
        		
        	});
        }

		return {
			getUsername: getUsernameText,
			getPassword: getPasswordText,
			attachButtonHandler: attachRegisterButtonHandler
		};
	}());

	return {
		loginControl: loginControl,
		registerControl: registerControl,
	}
}());