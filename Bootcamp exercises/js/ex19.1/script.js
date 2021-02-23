// 1
const liElement = document.querySelector('.start-here');
liElement.innerText = 'main title';
// 2
const ul = liElement.nextElementSibling.firstElementChild;
const clone = ul.firstElementChild.cloneNode(true);
ul.lastElementChild.insertAdjacentElement('afterend', clone);
ul.lastElementChild.innerText = 'sub title 4';
// 3
liElement.nextElementSibling.nextElementSibling.remove();
// 4
liElement.parentElement.parentElement.parentElement.firstElementChild.querySelector(
	'title'
).innerText = 'Master Of The Dom.';
// 5
console.log(
	(liElement.parentElement.nextElementSibling.firstElementChild.innerText =
		'Something else')
);
