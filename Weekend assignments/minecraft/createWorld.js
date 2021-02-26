// world size variables:
let worldSize = 20;
const groundHight = worldSize / 2 + 2;
// change world size in the css file
document.documentElement.style.setProperty('--world-size', worldSize);
// select layout containers
const minecraft = document.querySelector('#minecraft');
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
	console.log(worldMatrix);

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
			world.appendChild(worldMatrix[row][col]);
		}
	}
}



function resetWorld(size) {
	createWorld();
	
}

// call create first game function
let worldMatrix = [];
