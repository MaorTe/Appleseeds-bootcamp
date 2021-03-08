let arr = [1, 2, 3, 4, 5, 6];
let cardNum = [...arr, ...arr];
cardNum = cardNum.sort(() => 0.5 - Math.random());

const $ = (x) => document.querySelector(x);
const game = $('.game');
const cards = $('.cards');
const allCard = document.querySelectorAll('.card');
let guesses = document.querySelector('.guesses');

const createCard = () => {
	cardNum.forEach((number) => {
		let card = document.createElement('div');
		card.classList.add('card');

		let cardFaceFront = document.createElement('div');
		cardFaceFront.classList.add('card-face');
		cardFaceFront.classList.add('card-face-front');
		// cardFaceFront.classList.add('color-transparent');
		card.appendChild(cardFaceFront);

		let cardFaceBack = document.createElement('div');
		cardFaceBack.classList.add('card-face');
		cardFaceBack.classList.add('card-face-back');
		card.appendChild(cardFaceBack);

		let cardNumber = document.createElement('h1');
		cardNumber.textContent = number;
		cardFaceBack.appendChild(cardNumber);

		cards.appendChild(card);
	});
};
createCard();

const state = {
	match: 0,
	numberOfClicks: 1,
	wrongGuesses: 0,
	isMatch: [],
	prevCardTarget: 0,
};
const handleClick = (e) => {
	// let span = document.createElement('span');

	if (e.target.parentNode.classList.contains('card')) {
		if (!e.target.parentNode.classList.contains('opacity')) {
			e.target.parentNode.classList.add('opacity');
			console.log(e.target.parentNode.textContent);

			state.isMatch.push(e.target.parentNode.textContent);
			if (state.isMatch.length === 2) {
				if (state.isMatch[0] === state.isMatch[1]) {
					//stay flipped
					console.log(
						`number of clicks are 
					${state.numberOfClicks} 
					cards are now flipped back`
					);
				} else {
					state.wrongGuesses++;
					guesses.textContent = `Wrong Guesses: ${state.wrongGuesses}`;
					setTimeout(() => {
						console.log(state.prevCardTarget.classList);
						if (state.prevCardTarget)
							state.prevCardTarget.classList.remove('flipped');

						e.target.parentNode.classList.remove('flipped');
						// [...cards.children].forEach((child) => {
						// 	child.classList.remove('flipped');
						// });
					}, 1000);
				}
			}
			// e.target.parentNode.classList.remove('disabledbutton1');
			if (state.numberOfClicks === 2) {
				cards.classList.add('disabledbutton');
				setTimeout(() => {
					cards.classList.remove('disabledbutton');
					cards.classList.remove('disabledbutton1');
				}, 1000);
				console.log(state.isMatch);
				state.numberOfClicks = 0;
				state.isMatch = [];
			}
		}

		[...cards.children].forEach((child) => {
			if (child.classList.contains('opacity')) {
				e.target.parentNode.classList.remove('opacity');
			}
		});
		state.numberOfClicks++;
	}
	e.target.parentNode.classList.add('flipped');

	state.prevCardTarget = e.target.parentNode;
	console.log(state.prevCardTarget);
};

// ------------
// selecting item from inventory
const cardsListener = document.querySelectorAll('.cards > div');
console.log(cardsListener);
// this forEach will attach event listeners to all childnodes inventoryItems NodeList
cardsListener.forEach((el) => {
	el.addEventListener('click', handleClick);
});

//--------------game timer
let second = 0,
	minute = 0;
let timer = document.querySelector('.timer');
let interval;
function startTimer() {
	interval = setInterval(function () {
		timer.innerHTML = minute + 'mins ' + second + 'secs';
		second++;
		if (second == 60) {
			minute++;
			second = 0;
		}
		if (minute == 60) {
			hour++;
			minute = 0;
		}
	}, 1000);
}
startTimer();
