const yargs = require('yargs');
yargs.command({
	command: 'add',
	describe: 'addition',
	builder: {
		num1: {
			describe: 'num1',
			demandOptions: true,
			// @ts-ignore
			type: 'integer',
		},
		num2: {
			describe: 'num2',
			demandOptions: true,
			// @ts-ignore
			type: 'integer',
		},
	},
	handler(argv) {
		console.log(argv.num1 + argv.num2);
	},
});
yargs.command({
	command: 'sub',
	describe: 'subtraction',
	builder: {
		num1: {
			describe: 'num1',
			demandOptions: true,
			// @ts-ignore
			type: 'integer',
		},
		num2: {
			describe: 'num2',
			demandOptions: true,
			// @ts-ignore
			type: 'integer',
		},
	},
	handler(argv) {
		console.log(argv.num1 - argv.num2);
	},
});

// node ex4.js add --num1=1 --num2=2
// node ex4.js sub --num1=1 --num2=2
console.log(yargs.argv);
yargs.parse();
