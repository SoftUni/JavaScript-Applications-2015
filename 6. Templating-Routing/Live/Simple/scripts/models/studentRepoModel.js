var app = app || {};

app.model = (function() {
    function StudentsRepoModel(baseUrl) {
        this._requester = app.requester.load(baseUrl);
        this.studentsRepo = {
            students: []
        };
    }

    StudentsRepoModel.prototype.getStudents = function () {
        var deffer = Q.defer();
        var _this = this;
        this.studentsRepo['students'].length = 0;

        this._requester.get('classes/Student/')
            .then(function (data) {
                data['results'].forEach(function(dataStudent) {
                    var student =
                        new Student(dataStudent.name,
                                    dataStudent.grade,
                                    dataStudent.objectId);
                    _this.studentsRepo['students'].push(student);
                });

                deffer.resolve(_this.studentsRepo);
            }, function (error) {
                deffer.reject(error);
            });

        return deffer.promise;
    };


    return {
        load: function (baseUrl) {
            return new StudentsRepoModel(baseUrl);
        }
    }
}());