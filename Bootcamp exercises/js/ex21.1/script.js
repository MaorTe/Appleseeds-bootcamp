const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', function () {
	if (document.querySelector('p')) {
		document.querySelector('p').remove();
	}
	const message = document.createElement('p');
	if (input.value >= 18) {
		message.textContent = 'you can drink a beer';
		document.body.appendChild(message);
	} else {
		message.textContent = 'you’re too young';
		document.body.appendChild(message);
	}
});
