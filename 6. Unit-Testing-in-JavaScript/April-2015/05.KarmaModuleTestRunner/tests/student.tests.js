describe('#student', function () {
    var student;

    before(function () {
        student = new Student('Pesho', 4);
    });

    it('when name and grade is given expected to create person', function () {
        var expectedName = 'Pesho';
        var expectedGrade = 5;
        expect(student.name).to.equal(expectedName);
        expect(student.grade).to.equal(expectedGrade);
    });

    it('when sayHello function is called expected to return string', function () {
        var expectedMessage = 'Hello, my name is Pesho';
        expect(student.sayHello()).to.equal(expectedMessage);
    })
});