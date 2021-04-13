const yargs = require('yargs');
const utils = require('./ex5.1');
const uniqId = require('uniqid');
// node index.js add --name="person1" --email="abcf@gmail.com"

yargs.command({
	command: 'add',
	describe: 'add new user',
	builder: {
		name: {
			describe: 'user name',
			// @ts-ignore
			demandOptions: true,
			type: 'string',
		},
		email: {
			describe: 'user email',
			// @ts-ignore
			demandOptions: true,
			type: 'string',
		},
	},
	handler(argv) {
		const user = {
			name: argv.name,
			email: argv.email,
			id: uniqId(),
		};
		utils.add(user);
	},
});

yargs.command({
	command: 'remove',
	describe: 'remove user',
	builder: {
		id: {
			describe: 'users id',
			// @ts-ignore
			demandOptions: true,
			type: 'string',
		},
	},
	handler(argv) {
		utils.remove(argv.id);
	},
});

yargs.command({
	command: 'update',
	describe: 'update user',
	builder: {
		id: {
			describe: 'users id',
			demandOptions: true,
			type: 'string',
		},
	},
	// @ts-ignore
	builder: {
		name: {
			describe: 'users name',
			type: 'string',
		},
	},
	// @ts-ignore
	builder: {
		email: {
			describe: 'users email',
			type: 'string',
		},
	},
	handler(argv) {
		utils.update(argv.id, argv.name, argv.email);
	},
});

yargs.command({
	command: 'read',
	describe: 'read user',
	builder: {
		id: {
			describe: 'users id',
			// @ts-ignore
			demandOptions: true,
			type: 'string',
		},
	},
	handler(argv) {
		utils.read(argv.id);
	},
});
yargs.parse();
