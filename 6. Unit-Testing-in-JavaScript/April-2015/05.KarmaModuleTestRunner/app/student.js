var Student = (function() {
    function Student (name, grade) {
        this.name = name;
        this.grade = grade;
    }

    Student.prototype.sayHello = function () {
        return 'Hello, my name is ' + this.name;
    };

    return Student
}());