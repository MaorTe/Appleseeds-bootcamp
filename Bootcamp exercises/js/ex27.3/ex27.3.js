//---------filter---------
Array.prototype.filter = function myFilter(arr, callback) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i])) {
			newArr.push(arr[i]);
		}
	return newArr;
};
//---------find---------
Array.prototype.find = function myFind(arr, callback) {
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i])) {
			return arr[i];
		}
};

const callbackFilterFunc = (param) => param.length > 6;
const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(myFilter(arr, callbackFilterFunc));
console.log(myFind(arr, callbackFilterFunc));
