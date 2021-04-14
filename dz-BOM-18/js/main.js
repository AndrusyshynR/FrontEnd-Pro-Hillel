// В зависимости от выбранных параметров сортировки выводить список todo.

var data = [{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	},
	{
		"userId": 1,
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"completed": true
	},
	{
		"userId": 1,
		"id": 3,
		"title": "fugiat veniam minus",
		"completed": true
	},
	{
		"userId": 1,
		"id": 4,
		"title": "et porro tempora",
		"completed": true
	},
	{
		"userId": 1,
		"id": 5,
		"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
		"completed": false
	},
	{
		"userId": 1,
		"id": 6,
		"title": "qui ullam ratione quibusdam voluptatem quia omnis",
		"completed": false
	},
	{
		"userId": 1,
		"id": 7,
		"title": "illo expedita consequatur quia in",
		"completed": false
	},
	{
		"userId": 1,
		"id": 8,
		"title": "quo adipisci enim quam ut ab",
		"completed": true
	},
	{
		"userId": 1,
		"id": 9,
		"title": "molestiae perspiciatis ipsa",
		"completed": false
	},
	{
		"userId": 1,
		"id": 10,
		"title": "illo est ratione doloremque quia maiores aut",
		"completed": true
	},
	{
		"userId": 1,
		"id": 11,
		"title": "vero rerum temporibus dolor",
		"completed": true
	},
	{
		"userId": 1,
		"id": 12,
		"title": "ipsa repellendus fugit nisi",
		"completed": true
	},
	{
		"userId": 1,
		"id": 13,
		"title": "et doloremque nulla",
		"completed": false
	},
	{
		"userId": 1,
		"id": 14,
		"title": "repellendus sunt dolores architecto voluptatum",
		"completed": true
	},
	{
		"userId": 1,
		"id": 15,
		"title": "ab voluptatum amet voluptas",
		"completed": true
	},
	{
		"userId": 1,
		"id": 16,
		"title": "accusamus eos facilis sint et aut voluptatem",
		"completed": true
	},
	{
		"userId": 1,
		"id": 17,
		"title": "quo laboriosam deleniti aut qui",
		"completed": true
	},
	{
		"userId": 1,
		"id": 18,
		"title": "dolorum est consequatur ea mollitia in culpa",
		"completed": false
	},
	{
		"userId": 1,
		"id": 19,
		"title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
		"completed": true
	},
	{
		"userId": 1,
		"id": 20,
		"title": "ullam nobis libero sapiente ad optio sint",
		"completed": true
	}
];
const todoList = document.querySelector('.todo-list');
const isCompleted = document.querySelector('.isComplited');
const searchInput = document.querySelector('.searchInput');

renderList(data);

function renderList(list) {
	list.forEach((item, indx) => {
		// console.log(item);
		let todoItem = `
	  <div class='todo-item todo-item-${item.id}'>
		 <div class="completed completed-${item.completed}">
			<h3 class="todo-item-title" data-userId='${item.userId}'>${indx+1} ${item.title}</h3>
		 </div>
	  </div>`;

		todoList.innerHTML += todoItem
	})
}

isCompleted.addEventListener('click', (event) => {
	//Доделал false на чекбокс
	history.pushState({}, '', isCompleted.checked == true ? `?isCompleted=${isCompleted.checked}` : `?isCompleted=${isCompleted.checked}`);

	let completed = isCompleted.checked
	filtersToParams(data, completed, 'checkbox');
});

searchInput.addEventListener('input', (event) => {
	//Сделал историю записи с инпута
	history.pushState({}, '', searchInput.value == true ? '' : `?search=${searchInput.value}`);

	let searchText = event.target.value;
	filtersToParams(data, searchText, 'search');
});


function filtersToParams(data, searchParam, field) {

	let isCompletedArr = data.filter((item) => {
		switch (field) {
			case 'checkbox':
				if (searchParam == true) {
					return searchParam == item.completed
				} else {
					return item
				}
				case 'search':
					return item['title'].includes(searchParam) ? item : false
				default:
					return item
		}
	});

	todoList.innerHTML = "";
	renderList(isCompletedArr);
}


//Добавил функцию сортировки
var changeSelect = document.querySelector('.select');
changeSelect.addEventListener('change', mySort);

function mySort(e) {

	history.pushState({}, '', changeSelect.value == true ? `?sort=${changeSelect.value}` : `?sort=${changeSelect.value}`)

	if (e.target.value === 'A&Z') {
		var dataSort = data.sort(function (a, b) {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		})
		todoList.innerHTML = "";
		renderList(dataSort);
	} else if (e.target.value === 'Z&A') {
		var dataSort = data.sort(function (a, b) {
			if (a.title > b.title) {
				return -1;
			}
			if (a.title < b.title) {
				return 1;
			}
			return 0;
		})
		todoList.innerHTML = "";
		renderList(dataSort);
	}
}