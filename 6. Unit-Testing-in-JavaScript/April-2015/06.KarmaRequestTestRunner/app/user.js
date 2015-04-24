function getStudent(id) {
    var defer = $.Deferred();

    $.ajax({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Student/' + id,
        headers : {
            'X-Parse-Application-Id': 'bJOanga8OB5IsGPzYW8C4ivKVDbZF1sd2hNrAO6z',
            'X-Parse-Rest-API-Key': 'Isczn96UnuG8CcdaIJYbsI68AeYCqiM1NutbKvCf'
        },
        success: function (data) {
            defer.resolve(data);
        },
        error: function (error) {
            defer.reject(error);
        }
    });

    return defer.promise();
}