(function() {
  var Student, addNewStudent, getAllStudents, lastStudentId, removeStudent, students;

  lastStudentId = 0;

  Student = (function() {
    function Student(name, grade) {
      this._id = ++lastStudentId;
      this.name(name);
      this.grade(grade);
    }

    Student.prototype.id = function() {
      return this._id;
    };

    Student.prototype.name = function(newName) {
      if (newName) {
        this._name = newName;
        return this;
      } else {
        return this._name;
      }
    };

    Student.prototype.grade = function(newGrade) {
      if (newGrade) {
        this._grade = newGrade;
        return this;
      } else {
        return this._grade;
      }
    };

    Student.prototype.toModel = function() {
      return {
        id: this.id(),
        name: this.name(),
        grade: this.grade()
      };
    };

    return Student;

  })();

  students = [];

  getAllStudents = function(req, res) {
    var student, studentsModels;
    studentsModels = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = students.length; _i < _len; _i++) {
        student = students[_i];
        _results.push(student.toModel());
      }
      return _results;
    })();
    return res.json({
      count: students.length,
      students: studentsModels
    });
  };

  addNewStudent = function(req, res) {
    var student;
    student = new Student(req.body.name, Number(req.body.grade));
    students.push(student);
    return res.status(201).json(student.toModel());
  };

  removeStudent = function(req, res) {
    var id, student;
    id = Number(req.params.id);
    students = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = students.length; _i < _len; _i++) {
        student = students[_i];
        if (student.id() !== id) {
          _results.push(student);
        }
      }
      return _results;
    })();
    return res.status(200).json({
      message: 'Success'
    });
  };

  module.exports = {
    getAll: getAllStudents,
    add: addNewStudent,
    remove: removeStudent
  };

}).call(this);