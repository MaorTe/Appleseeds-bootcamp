// --1--
var b = 1;
function someFunction(number) {
	function otherFunction(input) {
		return b;
	}
	b = 5;
	return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// firstResult will print the function itself (the syntax)
// result will print the inner, otherFunction which will return 5, it works due to closures

// --2--
var a = 1;
function b2() {
	a = 10;
	return;
	function a() {}
}
b2();
console.log(a);
// will print 1 cuz function a() {} will do hoisting , and then a will be function so when we do a = 10;
// its for the function and when we console.log(a) it will just print the global variable

// --3--
let i;
for (i = 0; i < 3; i++) {
	const log = () => {
		console.log(i);
	};
	setTimeout(log, 100);
}
// will make the function after the for loop due to the setTimeout function which delayes the code
// so will print 3 3 3
