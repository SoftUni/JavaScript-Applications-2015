var app = app || {};

app.controller = (function () {
	function BaseController(data) {
		this._data = data;
	}

	BaseController.prototype.loadHome = function (selector) {
		$(selector).load('./templates/home.html');
	}

	BaseController.prototype.loadLogin = function (selector) {
		$(selector).load('./templates/login.html');
	}

	BaseController.prototype.loadRegister = function (selector) {
		$(selector).load('./templates/register.html');
	}

	BaseController.prototype.loadBookmarks = function (selector) {
		this._data.bookmarks.getAll()
			.then(function (data) {
				$.get('templates/bookmarks.html', function (template) {
					var output = Mustache.render(template, data);
					$(selector).html(output);
				})
			})
	}

	BaseController.prototype.attachEventHandlers = function () {
		var selector = '#wrapper';
		attachLoginHandler.call(this, selector);
		attachRegisterHandler.call(this, selector);
		attachCreateBookmarkHandler.call(this, selector);
		attachDeleteBookmarkHandler.call(this, selector);
	}

	var attachLoginHandler = function (selector) {
		var _this = this;
		$(selector).on('click', '#login', function () {
			var username = $('#username').val();
			var password = $('#password').val();
			_this._data.users.login(username, password)
				.then(function (data) {
					window.history.replaceState('Bookmarks', 'Bookmarks', '#/bookmarks');
				},
				function (error) {
					// body...
				});
		});
	}

	var attachRegisterHandler = function (selector) {
		var _this = this;
		$(selector).on('click', '#register', function () {
			var username = $('#username').val();
			var password = $('#password').val();
			_this._data.users.register(username, password)
				.then(function (data) {
					alert(data.username);
				},
				function (error) {
					// body...
				});
		});
	}

	var attachCreateBookmarkHandler = function (selector) {
		var _this = this;
		$(selector).on('click', '#create-bookmark', function (ev) {
			var title = $('#title').val();
			var url = $('#url').val();
			var bookmark = {
				title: title,
				url: url
			}
			_this._data.bookmarks.add(bookmark)
				.then(function (data) {
					console.log('I am in bookmarks add success!');
					_this._data.bookmarks.getById(data.objectId)
						.then(function (bookmark) {
							var li = $('<li>').append(bookmark.title + ' - ' + bookmark.url);
							$('#bookmarks ul').append(li);
							$('#title').val('');
							$('#url').val('');
						}, function (error) {
							console.log(error);
						});
				}, function (error) {
					console.log(error);
				});
		});

		function getBookmark(objectId) {
			_this._data.bookmarks.getById(objectId)
				.then(function (bookmark) {
					console.log('I am in get by id success!');
					console.log(bookmark);
				}, function (error) {
					console.log(error);
				});
		}
	}

	var attachDeleteBookmarkHandler = function (selector) {
		var _this = this;
		$(selector).on('click', '.delete-bookmark-btn', function (ev) {
			var deleteConfirmed = confirm('Do you want to delete this bookmark');
			if (deleteConfirmed) {
				var objectId = $(this).parent().data('id');
				_this._data.bookmarks.delete(objectId)
					.then(function (data) {
						$(ev.target).parent().remove();
					},
					function (error) {
						console.log(error);
					})
			};
		})
	}

	return {
		get: function (data) {
			return new BaseController(data);
		}
	}
}())