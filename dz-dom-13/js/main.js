// Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия. Картинка для кнопки удаления:

var hide = document.querySelectorAll('.hide');

for(var item of hide) {
	item.addEventListener('click', funcDel);
}

function funcDel() {
	this.parentNode.classList.add('pane-hide');
};
