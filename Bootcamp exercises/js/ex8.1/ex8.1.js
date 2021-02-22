const name1 = { name: 'str1' };
const name2 = { name: 'str2' };
const name3 = { name: 'str3' };

const myMap = new Map();
myMap.set(name1, 'id = 1').set(name2, 'id = 2').set(name3, 'id = 3');

for (const entry of myMap) {
	console.log(entry[0], entry[1]);
}
