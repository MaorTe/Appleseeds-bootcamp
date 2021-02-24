const moveForward = (player) => {
	const car = document.querySelector(`#player${player}-race .active`);
	if (car.nextElementSibling) {
		car.nextElementSibling.classList.add('active');
		car.classList.remove('active');
	} else {
		alert(`Player ${player} wins! Play again?`);
		window.location.reload();
	}
};

const moveCars = (event) => {
	if (event.key === 'q') {
		moveForward(1);
	} else if (event.key === 'p') {
		moveForward(2);
	}
};

document.addEventListener('keyup', moveCars);
