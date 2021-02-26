// create a landing page
const landingPage = document.querySelector('#landing-page');
const restartGameButton = document.createElement('button');
// start button
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startGame);
function startGame() {
	// debugger;
	if (world.childElementCount === 0) {
		createMatrix();
	}
	landingPage.classList.add('hidden');
	resetWorld(20);
	// add event listener to every tile
	for (let row = 0; row < worldSize; row++) {
		for (let col = 0; col < worldSize; col++) {
			worldMatrix[row][col].addEventListener('click', handleTileClick);
		}
	}
}

// add event listener to the restart game button to go back to the landing page
restartGameButton.addEventListener('click', restartGame);
function restartGame() {
	debugger;
	console.log(world.childElementCount);
	if (world.childElementCount === 0) {
		createMatrix();
	}
	landingPage.classList.remove('hidden');
	resetWorld();
	// add event listener to every tile
	for (let row = 0; row < worldSize; row++) {
		for (let col = 0; col < worldSize; col++) {
			worldMatrix[row][col].addEventListener('click', handleTileClick);
		}
	}
}

function handleTileClick(event) {
	let pressedTileType = event.currentTarget.getAttribute('data-type');
	// if a tool or element were selected:
	if (document.querySelector('.selected')) {
		let selectedTool = document.querySelector('.selected');
		// check it's a tool and if the tile is accessible
		if (
			selectedTool.classList.contains('toolBox') &&
			isMinable(event.currentTarget)
		) {
			mineTheTile(pressedTileType, selectedTool.getAttribute('data-type'));
			// an element was selected and needs to be positioned
		} else if (
			selectedTool.classList.contains('inventoryBox') &&
			checkInventory(selectedTool.getAttribute('data-type'))
		) {
			placeTheTile(pressedTileType, selectedTool.getAttribute('data-type'));
		}
	}
}
