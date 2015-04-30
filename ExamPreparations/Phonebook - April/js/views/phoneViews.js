var app = app || {};

app.phoneViews = (function() {
    function PhoneViews() {
        this.listPhones = {
            loadPhonesView: loadPhonesView
        };

        this.addPhone = {
            addPhoneView: addPhoneView
        };

        this.editPhone = {
            editPhoneView: editPhoneView
        };

        this.deletePhone = {
            deletePhoneView: deletePhoneView
        }
    }

    function loadPhonesView (selector, data) {
        $.get('templates/phonebook.html', function (template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        });
    }

    function addPhoneView (selector) {
        $.get('templates/add-phone.html', function (template) {
            var outHtml = Mustache.render(template);
            $(selector).html(outHtml);
        }).then(function() {
            $('#addPhone').click(function() {
                var person = $('#personName').val();
                var number = $('#phoneNumber').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('addPhone', {person: person, number: number});
                });

                /*Old way of calling the addPhone function
                 * but this method needs a dependency with controller*/
                //return controller.addPhone(person, number);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    function editPhoneView (selector, data) {
        $.get('templates/edit-phone.html', function (template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        }).then(function() {
            $('#editPhone').click(function() {
                var person = $('#personName').val();
                var number = $('#phoneNumber').val();

                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('editPhone', {id:data.id, person: person, number: number});
                });

                /*Old way of calling the editPhone function
                 * but this method needs a dependency with controller*/
                //return controller.editPhone(data.id, person, number);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    function deletePhoneView (selector, data) {
        $.get('templates/delete-phone.html', function (template) {
            var outHtml = Mustache.render(template, data);
            $(selector).html(outHtml);
        }).then(function() {
            $('#deleteButton').click(function() {
                //Triggering an event in the application so that we
                //bypass any dependencies with the controller. We pass
                //data object to the event handler that we call the needed controller
                $.sammy(function() {
                    this.trigger('deletePhone', {id: data.id});
                });

                /*Old way of calling the deletePhone function
                 * but this method needs a dependency with controller*/
                //return controller.deletePhone(data.id);

                //The eventListener returns 'false' in order for our a:href
                //link to work correctly
                return false;
            })
        }).done();
    }

    return {
        load: function() {
            return new PhoneViews();
        }
    }
}());