// При первом посещении сайта вы должны записать в куки любое имя и дату захода, и на экране пишет "Добро пожаловать".
// Куки должны имень срок службы 10 секунд.
// Если пользователь обновляет страницу но еще не прошло 10 секунд то кука обновляется.
// Если он обновил позднее 10 секунд то на экран выводить что пожалуста нажмите на кнопку для обновления куки. Естественно появляется кнопка для обновления куки.


//Запись в куки
let cookieDate = new Date();

cookieDate.setTime(cookieDate.getTime() + (10 * 1000));
document.cookie = "Steve=Jobs; expires=" + cookieDate.toGMTString();

//Показ конопки для обновления
setTimeout(showButton, 11000);

function showButton() {
	btnCookie.classList.add('btn-show');
};

//Функция обновления куки
let btnCookie = document.querySelector('.btn');
btnCookie.addEventListener('click', updateCookies);

function updateCookies() {
	btnCookie.classList.remove('btn-show');

	location.reload();
};
