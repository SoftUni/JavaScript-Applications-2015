var app = app || {};

app.homeView = (function() {
    function HomeView(selector, data) {
        $.get('templates/home.html', function(template) {
            var output = Mustache.render(template);

            $(selector).html(output);
        })
    }

    return {
        load: function (selector, data) {
            return HomeView(selector, data);
        }
    }
}());