var app = app || {};

app.controller = (function () {
	function Controller(dataPersister) {
		this.persister = dataPersister;
	}

	Controller.prototype.load = function (selector) {
		var _this = this;
		this.attachEvents();

		this.persister.students.getAll(
			function (data) {
				_this.loadStudents(data);
			},
			function (error) {
				console.log(error);
			}
		);

	}

	function attachStudentToDom(element, student) {
		var studentWrapper = $('<div />');
		studentWrapper.attr('data-id', student.id);
		var name = $('<div />').append('Name: ' + student.name);
		var grade = $('<div />').append('Grade:' + student.grade);
		var deleteButton = $('<button class="student-delete-btn">X</button>');

		studentWrapper.append(name);
		studentWrapper.append(grade);
		studentWrapper.append(deleteButton);

		element.append(studentWrapper);
	}

	Controller.prototype.loadStudents = function (data) {
		var selector = '#all-students';
		var allStudentsWrapper = $(selector);
		for (var i = 0; i < data.count; i++) {
			var student = data.students[i];
			attachStudentToDom(allStudentsWrapper, student);
		};	
	}

	Controller.prototype.attachEvents = function () {
		var _this = this;
		$('#add-student').on('click', function (ev) {
			var student = {
				name: $('#name').val(),
				grade: $('#grade').val()
			}
			_this.persister.students.add(student,
				function addStudentSuccessHandler(data) {
					var studentsWrapper = $('#all-students');
					attachStudentToDom(studentsWrapper, data);
				},
				function addStudentErrorHandler(error) {
					console.log(error);
				}
			)
		});

		$('#all-students').on('click', '.student-delete-btn', function (ev) {
			var id = $(this).parent().attr('data-id');
			_this.persister.students.delete(
				id, 
				function (data) {
					$(ev.target).parent().remove();
				},
				function (error) {
					console.log(error);
				}	
			)
		})
	}

	return {
		get: function (dataPersister) {
			return new Controller(dataPersister);
		}
	}
}())