// Нужно сделать проверку на числа, при вводе 1 значение перемещатся на соседний инпут, при удалении переходить на предыдущий.

var inpurs = document.querySelectorAll('.cart_numb_item');

for (var i = 0; i < inpurs.length; i++) {
	inpurs[i].addEventListener('input', jump);
}

function jump() {
	this.nextElementSibling.focus();

	if(this.value === '') {
		this.previousElementSibling.focus();
	};

	// if (this.value !== '') {
	// 	this.nextElementSibling.focus();
	// } else if (this.value === '') {
	// 	this.previousElementSibling.focus();
	// };
};

//Функция для прописи только цыфр в инпутах.
let inputsCard = document.querySelectorAll('.cart_numb_item');

for (let i = 0; i < inputsCard.length; i++) {
	inputsCard[i].addEventListener('keydown', onlyNumbers);
}

function onlyNumbers(event) {
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) ||
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
			event.preventDefault();
		}
	}
}