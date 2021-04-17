const fs = require('fs');

//---- save ----
const save = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync('./database/users.json', dataJSON);
};

//---- add ----
const add = (user) => {
	const usersData = findUsers();
	const duplicateUser = usersData.find((el) => el.id === user.id);
	if (duplicateUser) {
		console.log('User id already exists');
	} else {
		usersData.push(user);
		save(usersData);
	}
};
//---- remove ----
const remove = (id) => {
	const usersData = findUsers();
	const removeUser = usersData.filter((el) => el.id !== id);

	if (usersData.length !== removeUser.length) {
		save(removeUser);
	} else {
		console.log("couldn't find user");
	}
};

//---- cash to deposit ----
const cashToDeposit = (id, cash) => {
	const currentUsersData = findUsers();
	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);

	if (userIndex !== -1) {
		const editedUser = {
			...user,
			cash: +user.cash + +cash,
		};
		currentUsersData.splice(user, 1, editedUser);
		save(currentUsersData);
	} else {
		return 'user not found';
	}
};
//---- credit to update ----
const updateCredit = (id, credit) => {
	const currentUsersData = findUsers();
	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);

	if (userIndex !== -1) {
		const editedUser = {
			...user,
			credit: credit > 0 ? +credit || +user.credit : 0,
		};
		currentUsersData.splice(user, 1, editedUser);
		save(currentUsersData);
	} else {
		return 'user not found';
	}
};
//---- withdraw ----
const withdraw = (id, cash) => {
	const currentUsersData = findUsers();
	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);

	if (user.cash > 0) {
		if (cash > user.cash + user.credit)
			return `cant withdraw more than ${user.cash + user.credit}`;
		user.cash -= cash;
		if (user.cash < 0) {
			user.credit += user.cash;
		}
	} else if (user.credit > 0 && user.cash <= 0) {
		if (user.credit - cash < 0) return `cant withdraw more than ${user.credit}`;
		user.credit -= cash;
		user.cash -= cash;
	} else return 'cannot withdraw anymore';

	if (userIndex !== -1) {
		const editedUser = {
			...user,
			cash: user.cash,
			credit: user.credit,
		};
		currentUsersData.splice(user, 1, editedUser);
		save(currentUsersData);
	} else {
		return 'user not found';
	}
	return user.cash;
};
const transferCredit = (uid1, uid2, cash) => {
	const uid1CashLeft = withdraw(uid1, cash);
	console.log(uid1CashLeft);
	cashToDeposit(uid2, uid1CashLeft);
};
//---- update ----
const update = (id, cash) => {
	const currentUsersData = findUsers();
	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);

	if (userIndex !== -1) {
		const editedUser = {
			...user,
			cash: cash || user.cash,
		};
		currentUsersData.splice(user, 1, editedUser);
		save(currentUsersData);
	} else {
	}
};

const findUsers = () => {
	try {
		const dataJSON = fs.readFileSync('./database/users.json', 'utf-8');
		const data = JSON.parse(dataJSON);
		return data;
	} catch (e) {
		return [];
	}
};
const findUser = (id) => {
	const usersData = findUsers();
	const user = usersData.find((el) => el.id === id);
	if (user) {
		return user;
	} else {
		console.log("user doesn't exists");
	}
};
module.exports = {
	findUsers,
	findUser,
	cashToDeposit,
	updateCredit,
	withdraw,
	transferCredit,
	add,
	remove,
	update,
};
