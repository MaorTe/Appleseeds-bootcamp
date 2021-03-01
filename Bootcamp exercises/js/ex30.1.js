function greaterThan10(num) {
	return new Promise(function (resolve, reject) {
		num > 10 ? resolve('greater than 10') : reject('no');
	});
}
greaterThan10(15)
	.then((success) => console.log(success))
	.catch((err) => console.log(err));
