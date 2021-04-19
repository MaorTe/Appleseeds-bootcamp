const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const data = require('./database/users.json');
const popularMovieData = require('./tmdb');
const {
	findUsers,
	addUser,
	findUser,
	cashToDeposit,
	updateCredit,
	withdraw,
	transferCredit,
	moreThan500,
} = require('./utils/utils');

app.use(express.json());
app.use(cors());

//will be either Production or Development
// console.log(process.env.NODE_ENV);

//this is where heroku will invoke our interface
const publicDirectory = path.join(__dirname, 'client/build');

//showing to express where is my static directory ,cuz client is static it doesnt change.
//the static files, once built in heroku are going to be inside 'client/build'.
//static is just one big JS HTML CSS files its not dynamically changing like the database etc
//thus we dont need to write 'npm run build' heroku does this for us
app.use(express.static(publicDirectory));

app.get('/api/movies/popular', async (req, res) => {
	try {
		const popular = await popularMovieData();
		res.send(popular.data);
	} catch (e) {
		console.log(e);
	}
});

app.get('/api/test', (req, res) => {
	res.send(data);
});

app.post('/api/form', (req, res) => {
	const { formValues } = req.body;
	res.send('coming from the backend ' + '' + formValues);
	console.log(formValues);
});
//get all users
app.get('/api/users', (req, res) => {
	try {
		const users = findUsers();
		res.status(200).send(users);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

//add a new user
app.post('/api/users', (req, res) => {
	try {
		const newUser = addUser(req.body);
		res.status(200).send(newUser);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

//fetch users by amount of cash they have
app.get('/api/users/filterbycash', (req, res) => {
	const filterByCash = moreThan500('100');
	res.status(200).send(filterByCash);
});

//get a single user
app.get('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const user = findUser(id);
	res.status(200).send(user);
});

//deposit cash to a user
app.put('/api/users/cash/:id', (req, res) => {
	const { id } = req.params;
	const cashDeposit = cashToDeposit(id, '11');
	res.status(200).send(cashDeposit);
});
//update a user credit
app.put('/api/users/credit/:id', (req, res) => {
	const { id } = req.params;
	const updatedCredit = updateCredit(id, '100');
	res.status(200).send(updatedCredit);
});
//withdraw cash from a user
app.put('/api/users/withdraw/:id', (req, res) => {
	const { id } = req.params;
	const updatedCredit = withdraw(id, '250');
	res.status(200).send(updatedCredit);
});
//transfer cash from user1 to user2
app.put('/api/users/transfer/:uid1&:uid2', (req, res) => {
	const { uid1, uid2 } = req.params;
	const transferredCredit = transferCredit(uid1, uid2, '100');
	res.status(200).send(transferredCredit);
});

//not in local host anymore, we have to change the port using Environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('listening...');
});
