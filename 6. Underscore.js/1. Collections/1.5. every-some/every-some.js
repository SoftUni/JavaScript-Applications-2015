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
		fullname: function () {
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

	//with _.every() and _.some()
	console.log("All below 50: " + _.every(people, function (p) {
		return p.age < 50;
	}));
	console.log("All above 10: " + _.every(people, function (p) {
		return p.age > 10;
	}));
	console.log("Some below 50: " + _.some(people, function (p) {
		return p.age < 50;
	}));
	console.log("Some above 50: " + _.some(people, function (p) {
		return p.age > 50;
	}));

	////with _.all() and _.any()
	//console.log("All below 50: " + _.all(people, function (p) {
	//	return p.age < 50;
	//}));
	//console.log("All above 10: " + _.all(people, function (p) {
	//	return p.age > 10;
	//}));
	//console.log("Some below 50: " + _.any(people, function (p) {
	//	return p.age < 50;
	//}));
	//console.log("Some above 50: " + _.any(people, function (p) {
	//	return p.age > 50;
	//}));

}());