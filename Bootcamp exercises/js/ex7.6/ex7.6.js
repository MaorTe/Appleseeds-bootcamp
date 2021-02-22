let obj = { name: 'aaa', age: 'bbb', date: 'ccc' };
console.log(obj);
function swap(obj) {
	let objSwapped = {};
	Object.entries(obj).forEach((entry) => {
		let key = entry[0];
		let value = entry[1];
		objSwapped[value] = key;
	});
	return objSwapped;
}

// function swapKeyVal(obj) {
// 	const swapedObj = {};

// 	for (const [key, value] of Object.entries(obj)) {
// 		console.log(`${key}: ${value}`);
// 		swapedObj[value] = key;
// 	}

// 	return swapedObj;
// }

console.log(swap(obj));
