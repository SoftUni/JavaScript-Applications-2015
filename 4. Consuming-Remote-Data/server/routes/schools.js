(function() {
	var School, addNewSchool, getAllSchools, lastSchoolId, removeSchool, schools;

	lastSchoolId = 0;

	School = (function() {
		function School(name) {
			this._id = ++lastSchoolId;
			this.name(name);
			this.students = [];
		}
		
		School.prototype.id = function() {
			return this._id;
		};

		School.prototype.name = function(newName) {
			if (newName) {
				this._name = newName;
				return this;
			} else {
				return this._name;
			}
		};
		
		School.prototype.toModel = function() {
			return {
				id: this.id(),
				name: this.name(),
				students: this.students
			};
		};

		return School;
	}());
	
	schools = [];
	
	getAllSchools = function(req, res) {	
		var school, schoolsModels;
		schoolsModels = (function() {
			var i, len, results;
			results = [];
			for (i = 0, len = schools.length; i < len; i++) {
				school = schools[i];
				results.push(school.toModel());
			}
			return results;
		})();
		
		return res.json({
			count: schools.length,
			schools: schoolsModels
		});
	}
	
	addNewSchool = function(req, res) {
		var school = new School(req.body.name);
		schools.push(school);
		return res.status(201).json(school.toModel());
	};
	
	removeSchool = function(req, res) {
		var id, school;
		id = Number(req.params.id);
		schools = (function() {
			var _results = [], 
				_i, 
				_len;
			
			for (_i = 0, _len = schools.length; _i < _len; _i++) {
				school = schools[_i];
				if (school.id() !== id) {
					_results.push(school);
				}
			}
			
			return _results;
		})();
		
		return res.status(200).json({
			message: 'Success'
		});
	};
	
	module.exports = {
		getAll: getAllSchools,
		add: addNewSchool,
		remove: removeSchool
	};
}).call(this);