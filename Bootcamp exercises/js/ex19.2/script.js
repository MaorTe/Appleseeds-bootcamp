const form = document.querySelector("form[name='verify']");
const inputs = document.querySelectorAll('.inputs > input');
const submit = document.querySelector("input[type='submit']");

//Add an event listener when I have a value in my input
const handleInput = (e) => {
	const input = e.target;
	//If there is a value in my input focus on the next input
	if (input.value && input.nextElementSibling) {
		input.nextElementSibling.focus();
	}
	if (inputs[inputs.length - 1].value) {
		submit.click();
	}
};
// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("input", handleInput);
// }
form.addEventListener('input', handleInput);

const handlePaste = (e) => {
	let paste = e.clipboardData.getData('text');
	console.log(inputs);

	inputs.forEach((input, index) => {
		input.value = paste[index] || '';
	});

	inputs[paste.length - 1].focus();
};
inputs[0].addEventListener('paste', handlePaste);

/*
Pseudo code:
1. Store the form in a variable
2. Store all inputs in a variable
3. Create a listener that will listen to the input
4. If there is a next sibling on that input and a value (because we can delete a number) then focus on the next sibling. 
5. If all the inputs have a value auto submit.
6. Listen to the paste event
7. Populate the inputs with the index of the paste.
8. If the past length is not enough populate the value with an empty string
9. Focus always on the last populated input when you paste.
*/

// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once
// all inputs all populated.
// Things to thing about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.
