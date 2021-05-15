// Нужно сделать проверку на числа, при вводе 1 значение перемещатся на соседний инпут, при удалении переходить на предыдущий.
// Добавить куки с сохранение карты
// cart=15615816816
// При заходе проверять куки и если есть сетить ее
// При вводе записывать в куки
// При изменении тоже перезаписывать

let inputsCard = document.querySelectorAll('.cart_numb_item');

for (let i = 0; i < inputsCard.length; i++) {
	inputsCard[i].addEventListener('input', jumpNextInput);
	inputsCard[i].addEventListener('keydown', onlyNumbers);
	// inputsCard[i].addEventListener('input', newValueInput);
};

function jumpNextInput() {
	if (this.value !== '') {
		this.nextElementSibling.focus();

	} else if (this.value === '') {
		this.previousElementSibling.focus();
	};
};

//Функция для прописи только цыфр в инпутах.
function onlyNumbers(event) {
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) ||
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
			event.preventDefault();
		}
	}
};

//Работа с куками
document.cookie = "card=156158168163";

function getCookie() {
	let allCookie = document.cookie;
	cookieArr = allCookie.split('; ');

	for (var key of cookieArr) {
		valueCookie = key.split('=')[1];
	};

	return valueCookie;
};

function insertCardNumber() {
	let cardNumber = getCookie();

	inputsCard.forEach((item, index) => {
		item.value = cardNumber[index];
	});
};

insertCardNumber();

//Заменв значения на новое
// function newValueInput() {
// 	for (let i = 0; i < inputsCard.length; i++) {

// 		let newValue = inputsCard[i].value;
// 		document.cookie = `card=${newValue}`;
// 	};
// };