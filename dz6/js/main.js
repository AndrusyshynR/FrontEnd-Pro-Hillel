// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
var letters = ['a', 'b', 'c'];
var num = [1, 2, 3];
var lettersNum = [];
lettersNum = letters.concat(num);
console.log('task1 -->', lettersNum);



// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var numbers = [1, 2, 3];
numbers.reverse();
console.log('task2 -->', numbers);



// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
var newNumbers = [3, 4, 15, 2, 7];
// newNumbers.sort(compareNumeric);
newNumbers.sort(function (a, b) {
	return a - b;
});
// function compareNumeric(x, y) {
// 	if (x > y) {
// 		return 1;
// 	} else if (x === y) {
// 		return 0;
// 	} else if (x < y) {
// 		return -1;
// 	} 
// }

console.log('task3 -->', newNumbers);



// Дан массив [3, 4, 1, 2, 7]. Создайте новый массив с чётными значениями.
var values = [3, 4, 1, 2, 7, 18, 14, 6, 9];
var evenValues = [];

for (var i = 0; i < values.length; i++) {
	if ((values[i] % 2) === 0) {
		evenValues.push(values[i]);
	}
}

console.log('task4 -->', evenValues);