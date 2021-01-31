var radius = prompt('Введите радиус цилиндра');
var height = prompt('Введите высоту цилиндра');

var cylinderVolume = height * Math.PI * Math.pow(radius, 2);
var baseArea = Math.PI * Math.pow(radius, 2);

alert("Объем цилиндра с площадью основы " + Math.round(baseArea) + ", радиусом " + radius + ", и высотой " + height + " равен: " + Math.round(cylinderVolume));
