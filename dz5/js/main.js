// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var numLetter = ['a', 'b', 'c'];
numLetter.push(1, 2, 3);
console.log('task1 -->', numLetter);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
var num = [1, 2, 3];
num.unshift(4, 5, 6);
console.log('task2 -->', num);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
var languages = ['js', 'css', 'jq'];
document.write(`${languages[0]}<br>`);

var lastItem = languages[languages.length - 1];
document.write(lastItem);
// document.write(languages[2]);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
var numbers = [1, 2, 3, 4, 5];
var newNum = [];
newNum = numbers.slice(0, 3);
console.log('task3 -->', newNum);
