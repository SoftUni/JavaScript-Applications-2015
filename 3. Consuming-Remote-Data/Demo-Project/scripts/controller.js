var application = application || {};

application.controller = (function () {
	function Main(dataPersister) {
		this.persister = dataPersister;
	}

	Main.prototype.load = function (selector) {
		this.attachEventHandlers();
		this.loadStudents(selector);
	}

	Main.prototype.loadStudents = function (selector) {
		this.persister.students.getAll(
			function (data) {
				var student;
				$(selector).html('');

				for (var i = 0; i < data.count; i++) {
					student = data.students[i];
					var studentWrapper = $('<div />')
					studentWrapper.append($('<div />').append(student.name));
					studentWrapper.append($('<div />').append(student.grade)); 
					studentWrapper.append($('<div />').append($('<button class="remove-student">x</button>'))); 
					studentWrapper.attr('data-id', student.id);	

					$(selector).append(studentWrapper);
				};
			}, 
			function (error) {
				console.log(error);
				$(selector).html(error)
			});
	}

	Main.prototype.attachEventHandlers = function () {
		var _this = this;
		$('#add-student-btn').on('click', function (ev) {
			var student = {
				name: $('#add-student-name').val(),
				grade: $('#add-student-grade').val()
			}

			_this.persister.students.add(student, 
				function (data) {
					_this.loadStudents('#students');
				},
				function (error) {
					console.log(error);
				}
			);

			ev.preventDefault();
			return false;
		});

		$('#students').on('click', '.remove-student', function (ev) {
			var a = 3;
			var id = $(this).parent().parent().attr('data-id');
			_this.persister.students.remove(id);
		})
	}

	return {
		get: function (dataPersister) {
			return new Main(dataPersister);
		}
	}
}());