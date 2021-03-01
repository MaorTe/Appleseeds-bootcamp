//---------filter---------
Array.prototype.filter = function (callback) {
	let newArr = [];
	for (let i = 0; i < this.length; i++)
		if (callback(this[i], i, this)) {
			newArr.push(this[i]);
		}
	return newArr;
};
//---------find---------
Array.prototype.find = function (callback) {
	for (let i = 0; i < this.length; i++)
		if (callback(this[i], i, this)) {
			return this[i];
		}
};

const callback = (param) => param.length > 6;
const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(Array.prototype.filter(arr, callback));
console.log(Array.prototype.find(arr, callback));
