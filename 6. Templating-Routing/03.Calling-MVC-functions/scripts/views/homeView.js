var app = app || {};

app.homeView = (function() {
    function HomeView(selector) {
        $(selector).empty();
        $('<p/>')
            .html('<h1>Welcome to our students site!</h1>')
            .appendTo(selector);
        $(selector).css('width', '100%');
    }

    return {
        load: function (selector) {
            new HomeView(selector);
        }
    }
}());