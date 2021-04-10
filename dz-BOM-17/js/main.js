// Создать окно, назвать Frontend, размеры окна 500*500.
// Вставить в окно картинку (Котиков).
// Окно должно двигаться каждую секунду в рандомное место.
// Не должно содержать ни скролбара ни тулбара..... ничего из параметров
// Через 15 секунд окно должно закрыться

var newWindow = document.querySelector('.but');

newWindow.addEventListener('click', openWindow);

function openWindow() {
	var newWin = window.open("", "Frontend", "toolbar=no, scrollbars=no, resizable=no, menubar=no, location=no, directories=no, status=no, top=0, left=0, width=500, height=500");
	
	var myImg = '<img src="./cat.jpeg">';
	newWin.document.write(myImg);    

	newWin.stop();

	setInterval(function () {
		newWin.moveTo((Math.random() * 1000), (Math.random() * 1000))
	}, 1000);

	setTimeout(function () {
		newWin.close();
	}, 15000);
};