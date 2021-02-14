const maxCount = 1000000;
const obj1 = {};
console.time('My operation 1');
for (let i = 0; i < maxCount; i++) {
	obj1[i] = [i];
}
console.timeEnd('My operation 1');

const myMap = new Map();
console.time('My operation 2');
for (let i = 0; i < maxCount; i++) {
	myMap.set(i, i);
}
console.timeEnd('My operation 2');
// --different each time

// ---------
// console.time('My operation 1');
// console.log(obj1[4]);
// console.timeEnd('My operation 1');

// console.time('My operation 2');
// console.log(myMap.get(4));
// console.timeEnd('My operation 2');
// --get ,map wins

// --------------
// console.time('My operation 1');
// console.log(delete obj1[4]);
// console.timeEnd('My operation 1');

// console.time('My operation 2');
// console.log(myMap.delete(4));
// console.timeEnd('My operation 2');

//--delete ,map wins
