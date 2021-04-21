// Небольшой калькулятор, при изменении любого поля сразу идёт пересчёт
// Использовать range, text, checkbox, radio и другие

var totalResult = document.querySelector('.result');

//блок input
var inputLength = document.querySelector('.length');
var inputWidth = document.querySelector('.width');
var inputHeight = document.querySelector('.height');

inputLength.addEventListener('input', resultBlockOne);
inputWidth.addEventListener('input', resultBlockOne);
inputHeight.addEventListener('input', resultBlockOne);

function resultBlockOne() {
	totalResInput = (+inputLength.value + +inputWidth.value + +inputHeight.value) * 0.6;
	totalResult.textContent = `Стоимость доставки ${totalResInput}грн`
};

//блок checkbox
var allCheckBox = document.querySelectorAll('.all-checkbox');

for (var i = 0; i < allCheckBox.length; i++) {
	allCheckBox[i].addEventListener('change', checkBoxValues);
};

function checkBoxValues() {
	if (this.checked) {
		totalResCheckBox = this.value * totalResInput;
		totalResult.textContent = `Стоимость доставки ${totalResCheckBox}грн`
	} else if (!this.checked) {
		totalResult.textContent = `Стоимость доставки ${totalResInput}грн`;
	}
};

//блок radio
var allRadioInp = document.querySelectorAll('.radio');

for (var i = 0; i < allRadioInp.length; i++)(
	allRadioInp[i].addEventListener('change', radioValues)
)

function radioValues() {
	if (this.checked === true) {
		totalResRadio = this.value * totalResCheckBox;
		totalResult.textContent = `Стоимость доставки ${totalResRadio}грн`;
	} else if (!this.checked === true) {
		totalResult.textContent = `Стоимость доставки ${totalResInput}грн`;
	}
}

//блок range
var range = document.querySelector('.range');
var valueRange = document.querySelector('.value-range');

range.addEventListener('input', rangeBlock);

function rangeBlock() {
	valueRange.textContent = `${range.value}км`;

	resRenge = +range.value * 0.3;
	totalResRange = resRenge * totalResRadio / 2;

	totalResult.textContent = `Стоимость доставки ${Math.round(totalResRange)}грн`;
};