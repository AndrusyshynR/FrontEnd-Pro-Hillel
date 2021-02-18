// 1) Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел. (Сделать через map)
var numbers = [1, -3, 5, -7, 8, 10, -4];

var result = numbers.filter(function (items) {
	return items > 0;
});

var sqrtNum = result.map(function (items) {
	return Math.sqrt(items)
})
console.log('task1 -->', sqrtNum);

// const result = numbers.filter((item) => items > 0);
// const newNum = result.map((item) => Math.sqrt(item));

// 2)Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
var items = [1, 3, 5, 7, 8, 10, 4];
var indexArr;

var newValue = items.reduce(function (accum, item, index) {
	var res = accum + item;
	
	if ( indexArr === undefined && res >= 10 ) {
		indexArr = index; 
	}

	return res;
}, 0);

console.log('task2 -->', indexArr);