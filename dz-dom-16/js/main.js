// С появлением попапа сравнивать сколько осталось до конца акции и показывать количество часов, и каждую секунду обновлять время.
// При нажатии Купить скрывать попап а при нажатии отмена скрывать попап но показывать через 10 секунд.
// Использовать setTimeout и setInterval.

var modal = document.querySelector('.modal');
var timer = document.querySelector('.timer');
var bay = document.querySelector('.bay');
var popupClosed = document.querySelector('.closed');

bay.addEventListener('click', popupBay);
popupClosed.addEventListener('click', popupClose);

function popupBay() {
	modal.classList.add('modalHide');

	localStorage.setItem('Sale', true)
	localStorage.setItem('ShowSalePopup', {
		isShow: false,
		time: 0
	})
	var info = JSON.parse(localStorage.getItem('ShowSalePopup'));
	console.log(info)
}

function popupClose() {
	modal.classList.add('modalHide');
	setTimeout(function() {
		modal.classList.remove('modalHide');
	}, 10000);
	
	localStorage.setItem('Sale', false)
	localStorage.setItem('ShowSalePopup', {
		isShow: true,
		time: 15000
	})
}

var date = new Date('April 15 2021 00:00:00');

function counter () {
	var nowDate = new Date();
	var restOfTime = date - nowDate;

	var day = Math.floor(restOfTime / 1000 / 60 / 60 / 24);
	var hours = Math.floor(restOfTime / 1000 / 60 /  60) % 24;
	var min = Math.floor(restOfTime / 1000 / 60 ) % 60;
	var sec = Math.floor(restOfTime / 1000) % 60;

	document.querySelector('.days').innerHTML = `${day}д:`;
	document.querySelector('.hours').innerHTML = `${hours}ч:`;
	document.querySelector('.min').innerText = `${min}м:`;
	document.querySelector('.seconds').textContent = `${sec}с`;
}
counter();

setInterval(counter, 1000);