function nameToInitials(str) {
	found = str.match(/[A-Z]/g);
	return `${found[0]}.${found[1]}`;
}

console.log(nameToInitials('Sam Harris'));
