// 1.Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var string = 'aaa bbb ccc';

console.log('task1 substr -->', string.substr(4, 4));
console.log('task1 substring -->', string.substring(4, 7));
console.log('task1 slice -->', string.slice(4, 7));



// 2.'я учу javascript!' Преобразуйте первую букву строки в верхний регистр.
var jsString = 'я учу javascript!';

var upperStr = `${jsString.slice(0, 1).toUpperCase()}${jsString.slice(1)}`;
console.log('task2 -->', upperStr);



// 3.Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var text = 'var_test_text';

var arrText = text.replace(/_/g, ' ').split(' ');

for (var i = 0; i < arrText.length; i++) {
	arrText[i] = arrText[i].slice(0, 1).toUpperCase() + arrText[i].slice(1);
}

var resultStr = arrText.join(' ').replace(/ +/g, '');
result = resultStr[0].toLowerCase() + resultStr.slice(1);

console.log('task3 -->', result);



// 4.Вывести в консоль рандомное число от 0 до 50
function randomValue(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('task4 -->', randomValue(0, 50));