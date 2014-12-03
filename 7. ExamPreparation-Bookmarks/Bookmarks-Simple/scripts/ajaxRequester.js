'use strict';

var ajaxRequester = (function() {
    var baseUrl = "https://api.parse.com/1/";

    var headers =
    {
        "X-Parse-Application-Id": "C0NsUSFtKPOq4TaGeqMf62XI6IG7HXydrpkjvSQX",
        "X-Parse-REST-API-Key": "0SL1EbtpvbP2QajiY0ENXKAjQkYLOmlrkgbNnBgN"
    };

    function login(username, password, success, error) {
        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: baseUrl + "login",
            data: {username: username, password: password},
            success: success,
            error: error
        });
    }

    function register(username, password, success, error) {
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "users",
            data: JSON.stringify({username: username, password: password}),
            success: success,
            error: error
        });
    }

    function getHeadersWithSessionToken(sessionToken) {
        var headersWithToken = JSON.parse(JSON.stringify(headers));
        headersWithToken['X-Parse-Session-Token'] = sessionToken;
        return headersWithToken;
    }

    function getBookmarks(sessionToken, success, error) {
        var headersWithToken = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "GET",
            headers: headersWithToken,
            url: baseUrl + "classes/Bookmark",
            success: success,
            error: error
        });
    }

    function createBookmark(title, url, userId, success, error) {
        var bookmark = {title: title, url: url, ACL : {}};
        bookmark.ACL[userId] = {"write": true, "read": true};
        jQuery.ajax({
            method: "POST",
            headers: headers,
            url: baseUrl + "classes/Bookmark",
            data: JSON.stringify(bookmark),
            success: success,
            error: error
        });
    }

    function deleteBookmark(sessionToken, bookmarkId, success, error) {
        var headersWithToken = getHeadersWithSessionToken(sessionToken);
        jQuery.ajax({
            method: "DELETE",
            headers: headersWithToken,
            url: baseUrl + "classes/Bookmark/" + bookmarkId,
            success: success,
            error: error
        });
    }

    return {
        login: login,
        register: register,
        getBookmarks: getBookmarks,
        createBookmark: createBookmark,
        deleteBookmark: deleteBookmark
    };
})();