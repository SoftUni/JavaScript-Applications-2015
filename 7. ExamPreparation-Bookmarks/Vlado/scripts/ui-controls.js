var app = app || {};

app.UI = (function () {
	function UI() {
		this.loginControl = new LoginControl();
		//this.registerControl = new RegisterControl();
		//this.studentsControl = new StudentsControl();
		//this.schoolsControl = new SchoolsControl();
	}

	var LoginControl = (function () {
		function LoginControl() {
		}

        LoginControl.prototype.getUsernameText = function () {
            // return $("#login-username-input").val();
        }

        LoginControl.prototype.getPasswordText = function () {
            // return $("#login-password-input").val();
        }

		return LoginControl;
	}());
	

	return {
		loginControl: LoginControl,
		//registerControl: RegisterControl,
	}
}());