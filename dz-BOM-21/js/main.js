// 1.При вводе 3 инпутов и нажатии на кнопку в 4 помещать сумму инпутов
// 2.Инпуты не должны быть пустыми
// 3.Инпуты не должны содержать ничего кроме цифр

var valueOne = document.querySelector('#first');
var valueTwo = document.querySelector('#second');
var valueThree = document.querySelector('#third');

var result = document.querySelector('.result');
var inpBut = document.querySelector('.but');

valueOne.addEventListener('keydown', onlyNumbers);
valueTwo.addEventListener('keydown', onlyNumbers);
valueThree.addEventListener('keydown', onlyNumbers);

inpBut.addEventListener("click", isEmptyValue);

//В инпутах должны быть только цифры
function onlyNumbers(event) {
	isEmptyValue();

	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) ||
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
			event.preventDefault();
		}
	}
}

//Инпуты не должны быть пустыми
function isEmptyValue() {
	if (valueOne.value !== '' && valueTwo.value !== '' || valueThree.value !== '') {
		sumNumber()
	} else if (valueOne.value !== '' || valueTwo.value !== '' && valueThree.value !== '') {
		sumNumber()
	}
}

// Функция подсчета чисел
function sumNumber() {
	var sum = +valueOne.value + +valueTwo.value + +valueThree.value;
	result.value = sum;
};

// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа. 
var myNumber = document.querySelector('.input-number');
var sumNum = document.querySelector('.res');

myNumber.addEventListener('blur', sumOfNumbers);

function sumOfNumbers() {
	var str = myNumber.value;

	str.split('').reduce(function (a, b) {
		return sumNum.innerText = +a + +b;
	})
}