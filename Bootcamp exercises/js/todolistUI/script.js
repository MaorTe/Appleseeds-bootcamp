//initialize the array
function init() {
	!Array.isArray(JSON.parse(localStorage.getItem('todoList'))) &&
		localStorage.setItem('todoList', JSON.stringify([]));
}
init();

const indexList = document.querySelector('[data-index-sorted]');
const checkedList = document.querySelector('[data-checked-sorted]');
const container = document.querySelector('.list');
const taskInput = document.querySelector('.add-input');

// create task button
const itemCreate = document.querySelector('[data-create]');

// render data (read)
const renderData = () => {
	container.innerHTML = '';
	const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
	todoListJSON.forEach((task, i) => {
		const html = `<li class="item">
		<label class="item-checkbox item-checkbox-3">
			<input type="checkbox" class="box" ${''}/><i class="fas fa-check"></i></label
		>
		<div>
			<label class="label-color" for="">${dateNow()}</label>
			<div class="col">
				<input class="textbox" type="text" disabled value="${task.input}" />
				<span class="focus-border"></span>
	  		</div>
		</div>

		<button class="item-update" data-update>
			<i class="far fa-edit"></i> 
		</button>
		<button class="item-delete" data-delete>
			<i class="fas fa-trash-alt"></i>
		</button>
	</li>`;
		container.innerHTML += html;
		// let checked = JSON.parse(localStorage.getItem('todoList'));
		// console.log(document.querySelector('.box'));
		// document.querySelector('.box').checked = task.checkbox;
		const isChecked = document.querySelector('.item-checkbox input');
		todoListJSON.forEach(() => {
			isChecked.checked = task.checkbox;
		});

		// const itemCheckbox = document.querySelectorAll(
		// 	'.list .item-checkbox input'
		// );
		// itemCheckbox.forEach((el, index) => {
		// 	el.checked = task.checkbox;
		// });
		// localStorage.setItem('todoList', JSON.stringify(todoListJSON));
	});

	// update
	const itemUpdate = document.querySelectorAll('.list [data-update]');
	itemUpdate.forEach((el, index) => {
		el.addEventListener('click', () => {
			el.previousElementSibling.children[1].firstElementChild.focus();
			const currentTask =
				el.previousElementSibling.children[1].firstElementChild;
			updateItem(el, currentTask, index);
		});
	});
	// delete
	const itemDelete = document.querySelectorAll('.list [data-delete]');
	itemDelete.forEach((el, index) => {
		el.addEventListener('click', () => deleteItem(index));
	});

	//checkbox
	const itemCheckbox = document.querySelectorAll('.list .item-checkbox input');
	itemCheckbox.forEach((el, index) => {
		el.addEventListener('click', () => listStatus(el, index));
	});
	localStorage.setItem('todoList', JSON.stringify(todoListJSON));
};
// ------------------------
function dateNow() {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();
	return (today = dd + '/' + mm + '/' + yyyy);
}
// create
function addItem() {
	const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
	// const checkbox = (isChecked.checked = false);
	const input = taskInput.value;
	if (input.length > 0) {
		todoListJSON.push({
			generateId: todoListJSON.length,
			input,
			checkbox: false,
		});
		localStorage.setItem('todoList', JSON.stringify(todoListJSON));
		renderData();
		taskInput.value = '';
	}
}

function deleteItem(index) {
	console.log(index);
	const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
	todoListJSON.splice(index, 1);
	localStorage.setItem('todoList', JSON.stringify(todoListJSON));
	renderData();
}
function updateItem(el, currentTask, index) {
	let isFocused = document.activeElement === currentTask;
	if (!isFocused) currentTask.disabled = false;
	if (isFocused) currentTask.disabled = true;
	//EventListener for each task input
	currentTask.addEventListener('blur', () => {
		const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
		todoListJSON[index].input = currentTask.value;
		localStorage.setItem('todoList', JSON.stringify(todoListJSON));
	});
}

function listStatus(el, index) {
	console.log(el);
	// console.log(document.querySelector('.box'));
	const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
	todoListJSON.forEach((task) => {
		if (task.generateId === index) {
			console.log(el.checked);
			task.checkbox = el.checked;
			el.checked = task.checkbox;
			// document.querySelector('.box').checked = task.checkbox;
			localStorage.setItem('todoList', JSON.stringify(todoListJSON));
		}
	});
}
//sorted by completed status
function sortByChecked() {
	const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
	todoListJSON.sort(function (a, b) {
		return a.checkbox - b.checkbox;
	});
	localStorage.setItem('todoList', JSON.stringify(todoListJSON));
	renderData();
	listStatus();
	todoListJSON.forEach((task) => {
		if (task.checkbox.checked) task.checkbox.checked = true;
		else task.checkbox.checked = false;
		localStorage.setItem('todoList', JSON.stringify(todoListJSON));
	});
}

//sorted by index
function sortByIndex() {
	const todoListJSON = JSON.parse(localStorage.getItem('todoList'));
	todoListJSON.sort(function (a, b) {
		return a.generateId - b.generateId;
	});
	localStorage.setItem('todoList', JSON.stringify(todoListJSON));
	renderData();
}

itemCreate.addEventListener('click', addItem);
checkedList.addEventListener('click', sortByChecked);
indexList.addEventListener('click', sortByIndex);

renderData();
