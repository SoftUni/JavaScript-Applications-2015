(function () {

	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('../../node_modules/underscore/underscore.js');
	}

	var Person = Object.create({
		init: function (fname, lname) {
			this.fname = fname;
			this.lname = lname;
			return this;
		},
		toString: function () {
			return this.fname + ' ' + this.lname;
		}
	});

	var people = [
		Object.create(Person).init('Kuncho', 'Kunev'),
		Object.create(Person).init('Peyo', 'Kostov'),
		Object.create(Person).init('Ivana', 'Kircheva'),
		Object.create(Person).init('Asen', 'Borisov'),
		Object.create(Person).init('Vlado', 'Vargala')
	];

	var withFamilynameWithK = _.filter(people, function (p) {
		return p.lname[0] === 'K';
	});

	console.log('---People whose lastname starts with "K":');
	_.each(withFamilynameWithK, function (p) {
		console.log(p.toString());
	});

	var withoutFamilynameWithK = _.reject(people, function (p) {
		return p.lname[0] === 'K';
	});

	console.log('---People whose lastname does not start with "K":');
	_.each(withoutFamilynameWithK, function (p) {
		console.log(p.toString());
	});

}());