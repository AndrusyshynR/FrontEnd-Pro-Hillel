// Напечатать полную таблицу умножения от 1 до 10. В консоль вывести данные разделять можно дополнительный console.log("**********")

// for (var i = 1; i < 11; i++) {
// 	console.log(i * 1);
// 	console.log(i * 2);
// 	console.log(i * 3);
// 	console.log(i * 4);
// 	console.log(i * 5);
// 	console.log(i * 6);
// 	console.log(i * 7);
// 	console.log(i * 8);
// 	console.log(i * 9);
// 	console.log(i * 10);
// 	if (i % 1 === 0) {
// 		console.log('***************************');
// 	}
// }

var resault;
for (var i = 1; i <= 10; i++) {
	if (i % 1 === 0) {
		console.log('***************************');
	}
	
	for (var j = 1; j <= 10; j++) {
		resault = i * j;
		// console.log(+i + '*' +j + '=' +resault);
		console.log(`${i} * ${j} = ${resault}`);
	}	
}
