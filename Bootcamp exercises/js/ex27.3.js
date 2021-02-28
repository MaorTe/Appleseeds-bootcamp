//---------filter---------
Array.prototype.filter = function (arr, callback) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i])) {
			newArr.push(arr[i]);
		}
	return newArr;
};
//---------find---------
Array.prototype.find = function (arr, callback) {
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i])) {
			return arr[i];
		}
};

const callback = (param) => param.length > 6;
const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(Array.prototype.filter(arr, callback));
console.log(Array.prototype.find(arr, callback));
