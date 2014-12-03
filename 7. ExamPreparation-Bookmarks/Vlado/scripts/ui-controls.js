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

        getUsernameText: function () {
            // return $("#login-username-input").val();
        },

        getPasswordText: function () {
            // return $("#login-password-input").val();
        },

		return LoginControl;
	}());
	

	return {
		loginControl: LoginControl,
		registerControl: RegisterControl,
		studentsControl: StudentsControl,
		schoolsControl: SchoolsControl,
	}
}());