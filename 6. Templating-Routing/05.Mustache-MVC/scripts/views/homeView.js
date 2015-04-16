var app = app || {};

app.homeView = (function() {
    function HomeView(selector) {
        $(selector).empty();

        $.get('templates/home.html', function (template) {
            var output = Mustache.render(template);
            $(selector).append(output);
        });

        $(selector).css('width', '100%');
    }

    return {
        load: function (selector) {
            new HomeView(selector);
        }
    }
}());