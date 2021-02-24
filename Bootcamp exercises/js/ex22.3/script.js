const keys = document.querySelector('.keys');
const obj = {};
const field = document.querySelector('.field');
const msg = document.querySelector('h3');
//generate random letter
const randomLetter = String.fromCharCode(0 | (Math.random() * 26 + 97));
console.log(randomLetter);
keys.addEventListener('keyup', (e) => {
	// limit to a-z only
	if (!/^[a-zA-Z\s]*$/.test(e.key))
		return (msg.textContent = 'must be letters from a..z and A..Z only.');

	obj[e.key] = obj[e.key] + 1 || 1;

	if (e.key === randomLetter) {
		msg.textContent = 'Right letter!';
		msg.style.color = 'green';
		msg.textContent = 'Would you like to play again?';
		field.value = `${e.key}`;
		keys.outerHTML = `<button onclick="rerender()">Yes</button>`;
	} else {
		for (const [key, value] of Object.entries(obj)) {
			if (value > 1) {
				msg.textContent = `${key} has already been pressed`;
				msg.style.color = 'red';
			} else {
				msg.textContent = 'Nope, wrong letter';
				keys.textContent += `${e.key}, `;
				msg.style.color = 'blue';
			}
		}
	}
});
function rerender() {
	window.location.reload();
}
