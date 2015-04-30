var app = app || {};

(function() {
    var appId= 'wWnuVcOpWnc5FpuNGXlW4vwZ4M3diZXzMjElMymj';
    var restAPI = 'zWEXH2MU3BojyX72eZI5TLadPpDFT9B5VE0etuAa';
    var baseUrl = 'https://api.parse.com/1/';

    var headers = app.headers.load(appId, restAPI);
    var requester = app.requester.load();
    var userModel = app.userModel.load(baseUrl, requester, headers);
    var phoneModel = app.phoneModel.load(baseUrl, requester, headers);

    var homeViews = app.homeViews.load();
    var userViews = app.userViews.load();
    var phoneViews = app.phoneViews.load();

    var userController = app.userController.load(userModel, userViews);
    var phoneController = app.phoneController.load(phoneModel, phoneViews);
    var homeController = app.homeController.load(homeViews);


    app.router = Sammy(function () {
        var selector = '#wrapper';

        this.before(function() {
            var userId = sessionStorage['userId'];
            if(userId) {
                $('#menu').show();
            } else {
                $('#menu').hide();
            }
        });

        this.before('#/home/', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.before('#/phones/(.*)', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.before('#/profile/(.*)', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.before('#/logout/', function() {
            var userId = sessionStorage['userId'];
            if(!userId) {
                this.redirect('#/');
                return false;
            }
        });

        this.get('#/', function () {
            homeController.welcomeScreen(selector);
        });

        this.get('#/login/', function() {
            userController.loadLoginPage(selector);
        });

        this.get('#/register/', function() {
            userController.loadRegisterPage(selector);
        });

        this.get('#/logout/', function() {
            userController.logout();
        });

        this.get('#/home/', function () {
            homeController.homeScreen(selector);
        });

        this.get('#/phones/', function() {
            phoneController.listAllPhones(selector);
        });

        this.get('#/phones/add/', function() {
            phoneController.loadAddPhoneView(selector);
        });

        this.get('#/phones/edit/:id', function() {
            phoneController.loadPhoneView(selector, this.params['id'], 'edit');
        });

        this.get('#/phones/delete/:data', function() {
            phoneController.loadPhoneView(selector, this.params['data'], 'delete');
        });

        this.get('#/profile/edit/', function () {
            userController.loadEditProfileView(selector);
        });

        //Declaring a login event listener that calls
        //the appropriate controller function for login
        this.bind('login', function(e, data) {
            userController.login(data.username, data.password);
        });

        //Declaring a register event listener that calls
        //the appropriate controller function for registration
        this.bind('register', function(e, data) {
            userController.register(data.username, data.password, data.fullName);
        });

        //Declaring an edit profile event listener that calls
        //the appropriate controller function for editing profile
        this.bind('editProfile', function(e, data) {
            userController.editProfile(data.username, data.password, data.fullName);
        });

        //Declaring an add phone event listener that calls
        //the appropriate controller function for adding a new phone entry
        this.bind('addPhone', function(e, data) {
            phoneController.addPhone(data.person, data.number);
        });

        //Declaring an edit phone event listener that calls
        //the appropriate controller function for editing phone entries
        this.bind('editPhone', function(e, data) {
            phoneController.editPhone(data.id, data.person, data.number);
        });

        //Declaring a delete phone event listener that calls
        //the appropriate controller function for deleting phone entries
        this.bind('deletePhone', function(e, data) {
            phoneController.deletePhone(data.id);
        });
    });

    app.router.run('#/');
}());