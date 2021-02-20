//---------filter---------

function filterFunc(arr, callback) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i])) {
			newArr.push(arr[i]);
		}
	return newArr;
}
const callbackFilterFunc = (param) => param.length > 6;
const arrFilter = [
	'spray',
	'limit',
	'elite',
	'exuberant',
	'destruction',
	'present',
];
console.log(filterFunc(arrFilter, callbackFilterFunc));

//---------foreach---------

const forEachFunc = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
};
const callbackForEachFunc = (param) => console.log(param);
const arrForEach = ['h', 'e', 'l', 'l', 'o'];
forEachFunc(arrForEach, callbackForEachFunc);

//---------map---------

function mapFunc(arr, callback) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i]));
	}
	return newArr;
}
const callbackMapFunc = (param) => param * 2;
const arrMap = [1, 4, 9, 16];
console.log(mapFunc(arrMap, callbackMapFunc));
