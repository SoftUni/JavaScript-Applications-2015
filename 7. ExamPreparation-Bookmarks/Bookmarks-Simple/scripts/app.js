'use strict';

(function() {

    $(function() {
        registerEventHandlers();

        var currentUser = userSession.getCurrentUser();
        if (currentUser) {
            showBookmarksView()
        } else {
            showHomeView();
        }
    });

    function registerEventHandlers() {
        $("#btnShowLoginView").click(showLoginView);
        $("#btnLoginRegister").click(showRegisterView);
        $("#btnShowRegisterView").click(showRegisterView);
        $("#btnLoginLogin").click(loginClicked);
        $("#btnRegister").click(registerClicked);
        $("#btnLogout").click(logoutClicked);
        $("#btnAddBookmark").click(addBookmarkClicked);
    }

    function showHomeView() {
        $("main > *").hide();
        $("#homeView").show();
        var currentUser = userSession.getCurrentUser();
        if (! currentUser) {
            $("#header span").text("");
            $("#header a").hide();
        }
    }

    function showLoginView() {
        $("main > *").hide();
        $("#loginView").show();
        $("#txtLoginUsername").val('');
        $("#txtLoginPassword").val('');
    }

    function loginClicked() {
        var username = $("#txtLoginUsername").val();
        var password = $("#txtLoginPassword").val();
        ajaxRequester.login(username, password, authSuccess, loginError);
    }

    function authSuccess(data) {
        userSession.login(data);
        showBookmarksView();
    }

    function loginError(error) {
        showAjaxError("Login failed", error);
    }

    function logoutClicked() {
        userSession.logout();
        showHomeView();
    }

    function showRegisterView() {
        $("main > *").hide();
        $("#registerView").show();
        $("#txtRegisterUsername").val('');
        $("#txtRegisterPassword").val('');
    }

    function registerClicked() {
        var username = $("#txtRegisterUsername").val();
        var password = $("#txtRegisterPassword").val();
        ajaxRequester.register(username, password,
            function(data) {
                data.username = username;
                authSuccess(data);
            },
            registerError);
    }

    function registerError(error) {
        showAjaxError("Register failed", error);
    }

    function showBookmarksView() {
        var currentUser = userSession.getCurrentUser();
        if (currentUser) {
            $("#header span").text(" - " + currentUser.username);
            $("#header a").show();

            $("main > *").hide();
            var sessionToken = currentUser.sessionToken;
            ajaxRequester.getBookmarks(sessionToken, loadBookmarksSuccess, loadBookmarksError);
        } else {
            showHomeView();
        }
    }

    function loadBookmarksSuccess(data) {
        var $bookmarksUl = $("#bookmarksView ul");
        $bookmarksUl.html('');
        for (var b in data.results) {
            var bookmark = data.results[b];
            var $bookmarkLi = $("<li>");
            $bookmarkLi.data("bookmark", bookmark);

            var $title = $("<div class='title'>");
            $title.text(bookmark.title);
            $bookmarkLi.append($title);

            var $url = $("<a class='url'>");
            $url.text(bookmark.url);
            $url.attr("href", bookmark.url);
            $bookmarkLi.append($url);

            var $deleteButton = $('<a href="#">Delete</a>');
            $deleteButton.click(deleteBookmarkButtonClicked);
            $bookmarkLi.append($deleteButton);

            $bookmarksUl.append($bookmarkLi);
        }

        $("#txtTitle").val('');
        $("#txtUrl").val('');

        $("#bookmarksView").show();
    }

    function loadBookmarksError(error) {
        showErrorMessage("Bookmarks load failed.");
    }

    function addBookmarkClicked() {
        var title = $("#txtTitle").val();
        var url = $("#txtUrl").val();
        var currentUser = userSession.getCurrentUser();
        ajaxRequester.createBookmark(title, url, currentUser.objectId,
            showBookmarksView, addBookmarkError);
    }

    function addBookmarkError(error) {
        showErrorMessage("Bookmarks create failed.");
    }

    function deleteBookmarkButtonClicked() {
        var bookmark = $(this).parent().data('bookmark');
        var currentUser = userSession.getCurrentUser();
        var sessionToken = currentUser.sessionToken;

        noty(
            {
                text: "Delete this bookmark?",
                type: 'confirm',
                layout: 'topCenter',
                buttons: [
                    {
                        text : "Yes",
                        onClick : function($noty) {
                            deleteBookmark(sessionToken, bookmark);
                            $noty.close();
                        }
                    },
                    {
                        text : "Cancel",
                        onClick : function($noty) {
                            $noty.close();
                        }
                    }
                ]}
        );
    }

    function deleteBookmark(sessionToken, bookmark) {
        ajaxRequester.deleteBookmark(
            sessionToken, bookmark.objectId,
            showBookmarksView, deleteBookmarkError);
    }

    function deleteBookmarkError(error) {
        showErrorMessage("Delete bookmark failed.");
    }

    function showAjaxError(msg, error) {
        var errMsg = error.responseJSON;
        if (errMsg && errMsg.error) {
            showErrorMessage(msg + ": " + errMsg.error);
        } else {
            showErrorMessage(msg + ".");
        }
    }

    function showInfoMessage(msg) {
        noty({
                text: msg,
                type: 'info',
                layout: 'topCenter',
                timeout: 5000}
        );
    }

    function showErrorMessage(msg) {
        noty({
                text: msg,
                type: 'error',
                layout: 'topCenter',
                timeout: 5000}
        );
    }

})();
