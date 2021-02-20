const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let newArr = [];
let len = 0;
// const result = words.filter((word) => word.length > 6);

for (let i = 0; i < arr.length; i++) {
	if (arr[i].length > 6) {
		newArr.length = len;
		newArr[len] = arr[i];
		len++;
	}
}
console.log(newArr);
