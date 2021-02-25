// 1.Выведите на экран зарплату Пети и Коли.
var obj = {
	'Коля': '1000',
	'Вася': '500',
	'Петя': '200'
};

document.write(`task1 -->  ${obj['Петя']}<br>task1 -->  ${obj['Коля']}<br>`);

// 2.Дан многомерный массив arr: Выведите с его помощью слово 'голубой'.
var arr = {
	'ru': ['голубой', 'красный', 'зеленый'],
	'en': ['blue', 'red', 'green'],
};

document.write(`task2 -->  ${arr['ru'][0]}`);

// 3.Дан обьект. При помощи get set сделать так что бы при передачи добавлялся цвет а при set выводились все цвета.
var arr = {
	'ru': ['голубой', 'красный', 'зеленый'],

	get fullArrCollors() {
		return this['ru'];
	},

	set fullArrCollors (newColor) {
		this['ru'].push(newColor);
	}
};

arr.fullArrCollors = 'розовый';
arr.fullArrCollors = 'черный';
console.log('task3 -->', arr.fullArrCollors);