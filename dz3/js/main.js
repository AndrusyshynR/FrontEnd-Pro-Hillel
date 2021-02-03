function isLannisterSoldier (soldierColor, shield) {
	//Вариант 1
	// return ((soldierColor === 'red') && ( shield === 'lion' )) ? console.log('true ' + "Это Ланнистер, на его щите изображон лев!") : isNotLannisterSoldier();


	//Вариант 2
	// if ((soldierColor === 'red') && ( shield === 'lion' )) {
	// 	console.log('true ' + "Это Ланнистер, на его щите изображон лев!");
	// } else if ((soldierColor === 'red') && ( shield === null )) {
	// 	console.log('true ' + 'Это Ланнистер но он без щита!');
	// } else if ((soldierColor === !'red') || ( shield === 'lion' )) {
	// 	console.log('true ' + "Это свой, но на его щите изображон лев!");
	// } else (isNotLannisterSoldier());
};

function isNotLannisterSoldier() {
	console.log('false ' + 'Это свой!');
}

isLannisterSoldier('red', 'lion'); // true
isLannisterSoldier('red', null);  // false
isLannisterSoldier('green', 'lion')
isLannisterSoldier('green', null)


// Цвет доспехов (строка). Если доспехи красные, то строка red.
// null если щита нет. Строка lion, если щит есть, и на нём изображен лев.
// Функция возвращает true, если распознан Ланнистер, и false если не распознан.