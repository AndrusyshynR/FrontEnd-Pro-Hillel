//Вывести первые 10 человек, ВЫВЕСТИ полько login, avatar_url, id
//https://api.github.com/users

fetch('https://api.github.com/users')
	.then((respons) => {
		return respons.json();
	})
	.then((dataObject) => {
		var quantity = 10;
		for(var i = 0; i < quantity; i++) {
			document.write(`<div>Login - ${dataObject[i].login}</div>`);
			document.write(`<div>Avatar_url - ${dataObject[i].avatar_url}</div>`);
			document.write(`<div>ID - ${dataObject[i].id}</div><br>`);
		}
	});
