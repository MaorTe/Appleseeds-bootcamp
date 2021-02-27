// --------------------- Landing page ----------------------
const landingPage = document.querySelector('#landing-page');
const restartGameButton = document.createElement('button');
const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', startGame);
function startGame() {
	if (world.childElementCount === 0) {
		console.log(world.childElementCount);
		createMatrix();
	}
	landingPage.classList.add('hidden');
	resetWorld();
	// by adding an event listener to the container, every tile will have it
	// trick from pini :)
	world.addEventListener('click', handleclick);
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
	// by adding an event listener to the container, every tile will have it
	// trick from pini :)
	world.addEventListener('click', handleclick);
	// for (let row = 0; row < worldSize; row++) {
	// 	for (let col = 0; col < worldSize; col++) {
	// 		worldMatrix[row][col].addEventListener('click', handleTileClick);
	// 	}
	// }
}
// --------------------- World Creation ----------------------
// call create first game function
let worldMatrix = [];
// world size variables:
let worldSize = 20;
// change world size in the css file
document.documentElement.style.setProperty('--world-size', worldSize);
// select layout containers
const world = document.querySelector('.world');

// make a matrix of 10*10 of sky:
function createMatrix() {
	for (let row = 0; row < worldSize; row++) {
		worldMatrix[row] = [];
		for (let col = 0; col < worldSize; col++) {
			worldMatrix[row][col] = document.createElement('div');
			worldMatrix[row][col].setAttribute('data-row', row);
			worldMatrix[row][col].setAttribute('data-col', col);
			worldMatrix[row][col].classList.add('tile');
			// append to the world container:
			world.appendChild(worldMatrix[row][col]);
		}
	}
}
// reset the world tiles to the origin

function createWorld() {
	worldShape = [
		[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2],
		[4, 0, 4, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
		[4, 4, 4, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
		[4, 4, 4, 4, 0, 0, 0, 3, 0, 5, 5, 0, 0, 0, 0, 0, 0, 3, 0, 0],
		[4, 4, 4, 5, 0, 0, 0, 3, 5, 4, 4, 5, 0, 0, 0, 0, 0, 3, 0, 0],
		[4, 6, 6, 5, 0, 0, 0, 5, 4, 4, 4, 4, 5, 0, 0, 0, 0, 3, 0, 0],
		[5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5],
		[6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
	];
	// console.log(worldMatrix);

	for (let row = 0; row < worldSize; row++) {
		for (let col = 0; col < worldSize; col++) {
			// worldMatrix[row][col].setAttribute('data-type', 'sky');
			switch (worldShape[row][col]) {
				case 0:
					worldMatrix[row][col].setAttribute('data-type', 'sky');
					break;
				case 1:
					worldMatrix[row][col].setAttribute('data-type', 'cloud');
					break;
				case 2:
					worldMatrix[row][col].setAttribute('data-type', 'leaves');
					break;
				case 3:
					worldMatrix[row][col].setAttribute('data-type', 'trunk');
					break;
				case 4:
					worldMatrix[row][col].setAttribute('data-type', 'rock');
					break;
				case 5:
					worldMatrix[row][col].setAttribute('data-type', 'grass');
					break;
				case 6:
					worldMatrix[row][col].setAttribute('data-type', 'dirt');
					break;
				default:
					break;
			}
		}
	}
}
// -------------------------------------------
function resetWorld(size) {
	createWorld();
}
// reset inventory
function resetInventory() {
	document
		.querySelectorAll('.inventoryBox')
		.forEach((el) => (el.textContent = 0));
}
// -------------------------------------------

function MineableByTool(tool, tile) {
	// debugger;
	if (
		(tool === 'shovel' && (tile === 'grass' || tile === 'dirt')) ||
		(tool === 'axe' && (tile === 'trunk' || tile === 'leaves')) ||
		(tool === 'pickaxe' && tile === 'rock')
	) {
		return true;
	} else if (
		tile === 'cloud' &&
		(tool === 'shovel' || tool === 'axe' || tool === 'pickaxe')
	)
		return true;
}
const obj = {};
function handleclick(e) {
	// debugger;
	let tileSelected = e.target.getAttribute('data-type');
	console.log(tileSelected);

	if (document.querySelector('.selected')) {
		let selectedTool = document.querySelector('.selected');
		if (MineableByTool(selectedTool.getAttribute('data-type'), tileSelected)) {
			// debugger;
			if (tileSelected && tileSelected !== 'sky') {
				obj[tileSelected] = obj[tileSelected] + 1 || 1;
				const inventoryBlocks = document.querySelector(
					`[data-type = '${tileSelected}'] > span`
				);
				inventoryBlocks.textContent = obj[tileSelected];
			}
			tileSelected = e.target.setAttribute('data-type', 'sky');
		}
	}

	// else {
	// 	inventory.addEventListener('click', useItem);
	// }
}

// using item
const inventory = document.querySelector('.inventory');
inventory.addEventListener('click', useItem);
function useItem(e) {
	let tileSelected = e.target.getAttribute('data-type');
	// let tilePlaced = document.querySelector(`[data-type = 'sky']`);
	// console.log(world.addEventListener('click', tilePlaced));
	const inventoryBlocks = document.querySelector(
		`[data-type = '${tileSelected}'] > span`
	);
	console.log(tileSelected);
	// if (inventoryBlocks.textContent === '1') {
	// console.log(e.target.classList);
	// e.target.classList.add('hidden');
	// }
	if (tileSelected && inventoryBlocks.textContent > '0') {
		// console.log(e.currentTarget.classList);
		// e.target.classList.remove('hidden');
		inventoryBlocks.style.userSelect = 'none';
		inventoryBlocks.textContent = --obj[tileSelected];
	}
}

// selecting item from inventory
const inventoryItems = document.querySelector('.toolbar');
inventoryItems.addEventListener('click', SelectItemFromInventory);
function SelectItemFromInventory(e) {
	// debugger;
	const inventoryItem = document.querySelectorAll('.toolbar [data-type]');
	// console.log(inventoryItem);
	if (e.target.classList.contains('selected')) {
		e.target.classList.remove('selected');
	} else {
		inventoryItem.forEach((el) => el.classList.remove('selected'));
		e.target.classList.add('selected');
	}
}

function handleTileClick(event) {
	let pressedTile = event.currentTarget.getAttribute('data-type');
	// if a tool or element were selected:
	selectedBlock = document.querySelector('.selected');
	if (selectedBlock) {
		let selectedTool = selectedBlock;
		// check it's a tool and if the tile is accessible
		if (
			selectedTool.classList.contains('toolBox') &&
			isMinable(event.currentTarget)
		) {
			mineTheTile(pressedTile, selectedTool.getAttribute('data-type'));
			// an element was selected and needs to be positioned
		} else if (
			selectedTool.classList.contains('inventoryBox') &&
			checkInventory(selectedTool.getAttribute('data-type'))
		) {
			placeTheTile(pressedTile, selectedTool.getAttribute('data-type'));
		}
	}
}
