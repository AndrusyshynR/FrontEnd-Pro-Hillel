// Нужно:
// навесить стили, добавить картинки на активности и на желаемый результат,
// выводить значение роста при его смене,
// Так же при нажатии на Next Prev переключатся между блоками

var btns = document.getElementsByTagName('button');

var blockOne = document.querySelector('.block-1');
var blockTwo = document.querySelector('.block-2');
var blockThree = document.querySelector('.block-3');
var blockFour = document.querySelector('.block-4');

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', pressBtn);
}

function pressBtn(event) {
	if (event.target.dataset.page === '2') {
		blockOne.classList.remove('active-block')
		blockTwo.classList.add('active-block')

		blockThree.classList.remove('active-block')
	} else if (event.target.dataset.page === '1') {
		blockTwo.classList.remove('active-block')
		blockOne.classList.add('active-block')
	} else if (event.target.dataset.page === '3') {
		blockTwo.classList.remove('active-block')
		blockThree.classList.add('active-block')

		blockFour.classList.remove('active-block')
	} else if (event.target.dataset.page === '4') {
		blockThree.classList.remove('active-block')
		blockFour.classList.add('active-block')
	}
}

//Функция добавления значения роста рядом с инпутом
var inputHeight = document.querySelector('.input-height');
var resultHeight = document.querySelector('.result-height');

inputHeight.addEventListener('input', growthDisplay);

function growthDisplay() {
	resultHeight.textContent = `Ваш рост ${inputHeight.value}см`;
}

//Функция добавления картинок с результатом выбора
var activityRange = document.querySelector('.activity');
var activityResult = document.querySelector('.activity-result');
var activityImgs = document.querySelector('.result-imgs');

let arrImgsActivity = [
	img1 = './style/imgs/liesman.png',
	img2 = './style/imgs/sittingman.png',
	img3 = './style/imgs/goesman.png',
	img4 = './style/imgs/runningman.png',
];

activityRange.addEventListener('input', setActivity);

function setActivity(imgsItem) {

	for (var i = 0; i < imgsItem.length; i++) {
		// console.log(imgsItem[i]);
	}

	switch (activityRange.value) {
		case '1':
			activityResult.innerText = 'Лежащий';
			activityImgs.src = `${img1}`
			break
		case '2':
			activityResult.innerText = 'Сидящий';
			activityImgs.src = `${img2}`
			break
		case '3':
			activityResult.innerText = 'Идущий';
			activityImgs.src = `${img3}`
			break
		case '4':
			activityResult.innerText = 'Бегущий';
			activityImgs.src = `${img4}`
			break
		default:
			activityResult.innerText = 'Идущий';
			activityImgs.src = `${img3}`
	}
}

setActivity(arrImgsActivity);


var formBody = document.querySelector('.form-body');
var formResult = document.querySelector('.form-result');
var formBodyImg = document.querySelector('.body-imgs');

let arrImgsFormBody = [
	imgbody1 = './style/imgs/verythin.jpg',
	imgbody2 = './style/imgs/thin.jpg',
	imgbody3 = './style/imgs/normal.jpg',
	imgbody4 = './style/imgs/fat.jpg',
];

formBody.addEventListener('input', setFormBody);

function setFormBody(imgsItem) {

	for (var i = 0; i < imgsItem.length; i++) {
		// console.log(imgsItems[i]);
	}

	switch (formBody.value) {
		case '1':
			formResult.innerText = 'Очень худой';
			formBodyImg.src = `${imgbody1}`
			break
		case '2':
			formResult.innerText = 'Худой';
			formBodyImg.src = `${imgbody2}`
			break
		case '3':
			formResult.innerText = 'Нормальный';
			formBodyImg.src = `${imgbody3}`
			break
		case '4':
			formResult.innerText = 'Толстый';
			formBodyImg.src = `${imgbody4}`
			break
		default:
			formResult.innerText = 'Нормальный';
			formBodyImg.src = `${imgbody3}`
	}
}

setFormBody(arrImgsFormBody);

//Функция для прописи только цыфр в инпуты.
var currentWeight = document.querySelector('.current-weight');
var desiredWeight = document.querySelector('.desired-weight');

currentWeight.addEventListener('keydown', onlyNumbers);
desiredWeight.addEventListener('keydown', onlyNumbers);

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