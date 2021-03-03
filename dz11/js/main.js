// 1.Работа с bind

var elem = document.getElementById('elem');

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()
func.bind(elem)('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func.bind(elem)('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.

function func(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);
}
var thisFuncInput = func.bind(elem);
thisFuncInput('Васечкин', 'Коля')




// 2.Работа с call
var elem2 = document.getElementById('elem2');

function func2() {
	alert(this.value);
}

func2.call(elem2); //тут должно вывести value инпута
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.