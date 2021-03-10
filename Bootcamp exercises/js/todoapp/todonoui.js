let todoList = [];
function addItem(id, taskName, isCompleted = false) {
	if (todoList.length === 0) {
		todoList.push({ id, taskName, isCompleted });
		console.log(todoList.length);
		return;
	}
	for (let i = 0; i < todoList.length; i++) {
		if (todoList[i].id !== id) {
			todoList.push({ id, taskName, isCompleted });
			return;
		}
	}
}
function deleteItem(id) {
	todoList.splice(
		todoList.findIndex((item) => item.id === id),
		1
	);
}
function markAsDone(id) {
	todoList.forEach((item) => {
		item.id === id && (item.isCompleted = true);
	});
}
function unmarkAsDone(id) {
	todoList.forEach((item) => {
		item.id === id && (item.isCompleted = false);
	});
}
function listStatus() {
	return todoList.sort(function (a, b) {
		return a.isCompleted - b.isCompleted;
	});
	// console.log(todoList);
}

addItem(1, 'aaa');
// addItem(2, 'bbb');
// addItem(3, 'ccc');
// addItem(4, 'ddd');
// console.log(todoList);
// deleteItem(2);
// markAsDone(3);
// markAsDone(1);
// unmarkAsDone(3);
// console.log(todoList);
// console.log(listStatus());

module.exports = {
	addItem,
	deleteItem,
	markAsDone,
	unmarkAsDone,
	listStatus,
};
