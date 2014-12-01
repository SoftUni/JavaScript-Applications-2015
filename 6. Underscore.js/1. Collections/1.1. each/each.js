(function () {

	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('../../node_modules/underscore/underscore.js');
	}

	var text,
		counts,
		person;
	text = "I am studying currently in Software University";

	counts = {};
	_.each(text, function (char) {
		var c = char.toLowerCase();
		if (!counts[c]) {
			counts[c] = 0;
		}
		counts[c]++;
	});

	_.each(counts, function (char, value) {
		console.log(char + " -> " + value);
	});

	person = {
		fname: "Pesho",
		lname: "Goshov",
		toString: function () {
			return this.fname + ' ' + this.lname;
		}
	};
	_.each(_.map(person, function (value, key) {
		return {
			key: key,
			value: value.toString()
		};
	}), function (item) {
		console.log(item.key + ' -> ' + item.value);
	});
}());