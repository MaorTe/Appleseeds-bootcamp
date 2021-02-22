function isValidPass1(pass) {
	if (pass.length > 7) return 'strong';
	else return 'weak';
}
function isValidPass2(pass) {
	return pass.length > 7 ? 'strong' : 'weak';
}
function isValidPass3(pass) {
	return (pass.length > 7 && 'strong') || 'weak';
}
function isValidPass4(pass) {
	if (pass.length > 7 && /[A-Z]/.test(pass)) return 'Very Strong';
	else if (pass.length === 7) return 'Strong';
	else return 'Weak';
}
console.log(isValidPass1('aaaaaaaaa'));
console.log(isValidPass2('aaaaaaaaa'));
console.log(isValidPass3('aaaaaaaaaaaa'));
console.log(isValidPass4('Aabcabcd'));
