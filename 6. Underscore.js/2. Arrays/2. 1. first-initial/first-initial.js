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
		Object.create(Person).init('Kuncho', 'Kunev', 44),
		Object.create(Person).init('Peyo', 'Kostov', 22),
		Object.create(Person).init('Ivana', 'Kircheva', 32),
		Object.create(Person).init('Asen', 'Borisov', 57),
		Object.create(Person).init('Vlado', 'Vargala', 21)
	];


	var first = _.first(people);
	console.log('---First: ');
	console.log(first.toString());

	console.log('---Initial: ');
	var initial = _.initial(people);
	console.log(initial.toString());

}());