//my way

function repeatStr(timesToRepeat, str) {
	let characters = (timesToRepeat - 1) * str.length;
	for (let i = 0; i < characters; i++) {
		str += str[i];
	}
	return str;
}
console.log(repeatStr(4, 'hello'));

//or the repeat way
console.log(`${'hello'.repeat(4)}`);
