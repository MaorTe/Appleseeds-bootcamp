const bcrypt = require('bcryptjs');
const myFunc = async () => {
	//provide from user
	const pass = 'Red12345!';
	//will store as hash
	//hash method returns a promise, first argument is the plain text pass
	//second argument is number of rounds we want to perform which is how many times the hashing algorithm is executed
	//why 8? it strikes a nice balance between security and speed
	const hashPass = await bcrypt.hash(pass, 8);
	console.log(pass);
	console.log(hashPass);

	//this algorithm will compared the plain text password and will compare it with a hash we already have in place
	const isMatch = await bcrypt.compare('Red12345!', hashPass);
	console.log(isMatch);
};
myFunc();
