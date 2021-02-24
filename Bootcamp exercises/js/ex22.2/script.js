const check = document.querySelector('[name="checkbox"]');
const div = document.createElement('div');
const img = document.createElement('img');
img.src = 'https://picsum.photos/200/300';
check.addEventListener('change', function (event) {
	if (event.currentTarget.checked) {
		document.body.appendChild(div);
		div.appendChild(img);
	} else div.remove(img);
});
