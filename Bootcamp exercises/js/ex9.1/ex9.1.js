const logStr = (str) => console.log(str);

function isString(str, callback) {
	typeof str === 'string' && callback(str);
}

logStr(isString('aaa', logStr));
// ---------

const makeDashes = (str) => console.log(str.replaceAll(' ', '-'));

function firstWordUpperCase(str, callback) {
	let split = str.split(' ');
	split[0] = split[0].toUpperCase();
	callback(split.join(' '));
}

firstWordUpperCase('aa bb cc', makeDashes);
