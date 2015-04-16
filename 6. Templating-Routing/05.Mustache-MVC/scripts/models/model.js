var app = app || {};

app.model = (function() {
    function Model(baseUrl, requester) {
        this._baseUrl = baseUrl;
        this.requester = requester;
        this.studentRepo = {
            students: []
        };
    }

    Model.prototype.getStudents = function () {
        var deffer = Q.defer();
        var _this = this;

        this.studentRepo.students.length = 0;

        this.requester.get(this._baseUrl + 'classes/Student')
            .then(function (data) {
               data['results'].forEach(function (student) {
                   var studentObject = new Student(student.name, student.grade, student.objectId);
                   _this.studentRepo.students.push(studentObject);
               });
                deffer.resolve(_this.studentRepo);
            },
            function (error) {
                deffer.reject(error);
            });

        return deffer.promise;
    };

    return {
        load: function (baseUrl, requester) {
            return new Model(baseUrl, requester);
        }
    }
}());