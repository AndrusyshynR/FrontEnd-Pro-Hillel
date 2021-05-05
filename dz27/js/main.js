// 1.На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов.
// И добавьте троеточие в конец обрезанного текста.

let divs = document.querySelectorAll('.div-text');
let btn = document.querySelector('.but');

btn.addEventListener('click', trimText);

function trimText() {
	for (let items of divs) {
		let truncatedText = items.innerText.slice(0, 10);
		items.innerText = `${truncatedText}...`;
	}
};

// 2.Дан абзац. Дан массив цветов ['red', 'green', 'blue'].
// Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее.
// Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым.

let arrClors = ['red', 'green', 'blue', 'pinc', 'orange', 'yellow', 'black'];
let textColor = document.querySelector('.text-color');

let color = length-1;

setInterval(function colorChange() {
	textColor.style.color = arrClors[color];
	color++;

	if (color >= arrClors.length) {
		color = length-1;
	}
}, 500);
