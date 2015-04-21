var app = app || {};

app.studentsController = (function() {
    function StudentsController(model) {
        this._model = model;
    }

    StudentsController.prototype.loadStudents = function (selector) {
        var _this = this;
        this._model.getStudents()
            .then(function (studentsData) {
                var outputData = {
                    students: studentsData.results
                };

                app.allStudentsView.render(_this, selector, outputData);
            }, function (error) {
                console.log(error.responseText);
            })
    };

    StudentsController.prototype.addStudent = function (selector, name, grade) {
        var student = {
            name: name,
            grade: Number(grade)
        };

        this._model.addStudent(student)
            .then(function () {
                app.addStudentView.render(selector, student);
            }, function (error) {
                console.log(error.responseText);
            })
    };


    return {
        load: function (model) {
            return new StudentsController(model);
        }
    }
}());