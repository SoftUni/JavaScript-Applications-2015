(function() {
var cars = [
	{make: "Nissan", model: "Skyline", color: "red"},
	{make: "Audi", model: "A6", color: "blue"},
	{make: "Lada", model: "Vesta", color: "red"},
	{make: "Moskvich", model: "412", color: "yellow"},
	{make: "Peugeot", model: "206", color: "red"}];
	
var carsByColor = _.groupBy(cars, "color");
console.log(carsByColor);

}());