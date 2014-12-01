(function () {
	//check if running on Node.js
	if (typeof require !== 'undefined') {
		//load underscore if on Node.js
		_ = require('../../node_modules/underscore/underscore.js');
	}

	function first(p) {
		return p + " first";
	}

	function second(p) {
		return p + " second";
	}

	function third(p) {
		return p + " third";
	}

	var nestedAll = third(second(first("zero")));
	var all = _.compose(third, second, first);

	console.log(nestedAll);
	console.log(all("zero"));
}());