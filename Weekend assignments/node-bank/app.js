const express = require('express');
const app = express();
const {
	findUsers,
	add,
	findUser,
	remove,
	update,
	cashToDeposit,
	updateCredit,
	withdraw,
	transferCredit,
} = require('./utils/utils');

app.use(express.json());

//get all users
app.get('/api/users', (req, res) => {
	const users = findUsers();
	res.status(200).send(users);
});

//add a user
app.post('/api/users', (req, res) => {
	try {
		const newUser = add(req.body);
		res.status(200).send(newUser);
	} catch (e) {
		res.status(200).send({ error: e.message });
	}
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
	const updatedCredit = updateCredit(id, '110');
	res.status(200).send(updatedCredit);
});
//withdraw cash from a user
app.put('/api/users/withdraw/:id', (req, res) => {
	const { id } = req.params;
	const updatedCredit = withdraw(id, '300');
	res.status(200).send(updatedCredit);
});
//transfer cash from user1 to user2
app.put('/api/users/transfer/:uid1&:uid2', (req, res) => {
	const { uid1, uid2 } = req.params;
	const transferedCredit = transferCredit(uid1, uid2, '300');
	res.status(200).send(transferedCredit);
});

//update an existing user
app.put('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const userToUpdate = update(id, 'aaa');
	res.status(200).send(userToUpdate);
});

//deletes an existing user
app.delete('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const userToRemove = remove(id);
	res.status(200).send(userToRemove);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log('listening...');
});
