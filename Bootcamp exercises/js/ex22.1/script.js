const btnSubmit = document.querySelector('[name="submit"]');

btnSubmit.addEventListener('submit', function (event) {
	event.preventDefault();
	const confirmMessage = confirm(`${event.currentTarget.name.value}
    ${event.currentTarget.age.value}
    ${event.currentTarget.email.value}
    Are you sure?`);
	if (confirmMessage) alert('congratulations you successfully sent this form');
});
