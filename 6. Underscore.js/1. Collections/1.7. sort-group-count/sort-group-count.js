(function () {
	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('../../node_modules/underscore/underscore.js');
	}

	var Person = Object.create({
		init: function (fname, lname, age) {
			this.fname = fname;
			this.lname = lname;
			this.age = age;
			return this;
		},
		toString: function () {
			return this.fname + ' ' + this.lname;
		}
	});

	var people = [
		Object.create(Person).init('Mitko', 'Ruletkata', 63),
		Object.create(Person).init('Gencho', 'Ganev', 32),
		Object.create(Person).init('Penio', 'Penev', 10),
		Object.create(Person).init('Unufri', 'Unufriev', 17)
	];
	
	console.log(JSON.stringify(people));

	console.log("---Original: ");
	console.log(people.join(", "));

	var sortedByFirstname = _.sortBy(people, "fname");
	console.log("---By firstname: ");
	console.log(sortedByFirstname.join(", "));

	var sortedByLastname = _.sortBy(people, "lname");
	console.log("---By lastname: ");
	console.log(sortedByLastname.join(", "));

	var sortedByFullnameLength = _.sortBy(people, function (p) {
		return p.toString().length;
	});
	console.log("---By length of fullname: ");
	console.log(sortedByFullnameLength.join(", "));

	console.log('---By count of length of firstname');
	var countBy = _.countBy(people, function (p) {
		return p.fname.length;
	});
	console.log(countBy);
}());