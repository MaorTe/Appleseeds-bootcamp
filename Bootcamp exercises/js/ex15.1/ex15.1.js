// -----1-----
function funcA() {
	function foo() {
		return 2;
	}
	console.log(a);
	console.log(foo());

	var a = 1;
}
funcA();

//console.log(a); will be undefined cuz in Var's case JS first hoist the variable declaration
//but it will not hoist the actual value so its like writing var a;
//console.log(foo()); in this case, JS hoising moves the functions to the top of the scopes
//so it will be written like this
// function foo() {
// 	return 2;
// }
// console.log(a);
// console.log(foo());
//and will log 2

// -----2-----
var fullName = 'John Doe';
var obj = {
	fullName: 'Colin Ihrig',
	prop: {
		fullName: 'Aurelio De Rosa',
		getFullName: function () {
			return this.fullName;
		},
	},
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// console.log(obj.prop.getFullName()); will work just fine
// var test = obj.prop.getFullName;
// console.log(test());
// will not work cuz test() is not a function however it will work if we do like this
// var test = obj.prop.getFullName();
// console.log(test);

// -----3-----
function funcB() {
	let a = (b = 0);
	a++;
	return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// a will be undefined, variables inside a scope destroyed at the end of this scope
// however b will be 0 cuz its globaly scoped

// -----4-----
function funcC() {
	console.log('1');
}
funcC();
function funcC() {
	console.log('2');
}
funcC();
// both will be 2, the second function will override the first function, and due to
// function hoising they both will be at the start of this file like this:
// function funcC() {
// 	console.log('1');
// }
// function funcC() {
// 	console.log('2');
// }
// funcC();
// funcC();

// -----5-----
function funcD1() {
	d = 1;
}
funcD1();
console.log(d);
function funcD2() {
	var e = 1;
}
funcD2();
console.log(e);
// will print d=1, it doesnt have a keyword meaning its a global variable
// e will get destroyed after the fucntion finished and due to function hoisting both functions at the top

// -----6-----
function funcE() {
	console.log('Value of f in local scope: ', f);
}
console.log('Value of f in global scope: ', f);
var f = 1;
funcE();
// local scope will be 1 cuz var is a global variable and it knows him, also the console.log is after the function
// global scope will be undefined due to hoising, first it define var=undefined, then it will log it and only then
// it will assign the value to it
