const fs = require('fs');

//---- save ----
const save = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync('./database/users.json', dataJSON);
};

//---- add new user----
// const addUser = (user) => {
// 	const usersData = findUsers();
// 	const duplicateUser = usersData.find((el) => el.id === user.id);
// 	if (duplicateUser) {
// 		console.log('User id already exists');
// 	} else {
// 		usersData.push(user);
// 		// save(usersData);
// 	}
// };

//---- cash to deposit ----
const cashToDeposit = (id, cash) => {
	const currentUsersData = findUsers();
	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);
	if (!user.isActive) {
		return 'user account is not active';
	}
	if (userIndex !== -1) {
		const editedUser = {
			...user,
			cash: +user.cash + +cash,
			credit: +user.credit,
		};
		currentUsersData.splice(userIndex, 1, editedUser);
		save(currentUsersData);
	} else {
		return 'user not found';
	}

	return user;
};
//---- credit to update ----
const updateCredit = (id, credit) => {
	const currentUsersData = findUsers();
	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);
	if (!user.isActive) {
		return 'user account is not active';
	}
	if (userIndex !== -1) {
		const editedUser = {
			...user,
			credit: credit > 0 ? +credit || +user.credit : 0,
		};
		currentUsersData.splice(userIndex, 1, editedUser);
		save(currentUsersData);
	} else {
		return 'user not found';
	}
};
//---- withdraw ----
const withdraw = (account, cash) => {
	if (account.cash > 0) {
		if (cash > account.cash + account.credit)
			return `cant withdraw more than ${account.cash + account.credit}`;
		account.cash -= cash;
		if (account.cash < 0) {
			account.credit += account.cash;
		}
	} else if (account.credit > 0 && account.cash <= 0) {
		if (account.credit - cash < 0)
			return `cant withdraw more than ${account.credit}`;
		account.credit -= cash;
		account.cash -= cash;
	} else return 'cannot withdraw anymore';
	return { cash: account.cash, credit: account.credit };
};
// transfer
const transfer = (acc1, acc2, cash) => {
	console.log(acc2.isActive);
	if (acc2.isActive) {
		const acc1Status = withdraw(acc1, cash);
		if (typeof acc1Status !== 'string') return acc1Status;
	} else {
		return false;
		// return 'second user account is not active, cant transfer';
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
		return "user doesn't exists";
	}
};

//---- filter by amount of cash ----
const moreThan500 = (cash) => {
	const usersData = findUsers();
	const cash500Plus = usersData.filter((el) => el.cash >= cash);
	if (usersData.length !== cash500Plus.length) {
		return cash500Plus;
	} else {
		console.log(`no users with cash lower than ${cash}`);
	}
};
module.exports = {
	findUsers,
	findUser,
	cashToDeposit,
	updateCredit,
	withdraw,
	transfer,
	// addUser,
	moreThan500,
};
