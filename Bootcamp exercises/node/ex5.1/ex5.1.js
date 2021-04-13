const fs = require('fs');
//---- load ----
const load = () => {
	try {
		const dataJSON = fs.readFileSync('users.json', 'utf-8');
		const data = JSON.parse(dataJSON);
		console.log(data);
		return data;
	} catch (e) {
		return [];
	}
};

//---- save ----
const save = (users) => {
	const dataJSON = JSON.stringify(users);
	fs.writeFileSync('users.json', dataJSON);
};

//---- add ----
const add = (user) => {
	const usersData = load();
	const duplicateUser = usersData.find(
		(el) => el.email === user.email || el.name === user.name
	);
	if (duplicateUser) {
		console.log('email already exists');
	} else {
		usersData.push(user);
		save(usersData);
	}
};
//---- remove ----
const remove = (id) => {
	const usersData = load();
	const removeUser = usersData.filter((el) => el.id !== id);

	if (usersData.length !== removeUser.length) {
		save(removeUser);
	} else {
		console.log("couldn't find user");
	}
};

//---- update ----
const update = (id, name, email) => {
	const currentUsersData = load();

	const userIndex = currentUsersData.findIndex((el) => el.id === id);
	const user = currentUsersData.find((el) => el.id === id);
	console.log(userIndex);
	if (userIndex !== -1) {
		const editedUser = {
			...user,
			name: name || user.name,
			email: email || user.email,
		};
		currentUsersData.splice(user, 1, editedUser);
		save(currentUsersData);
	}
};

//---- read ----
const read = (id) => {
	const usersData = load();
	const user = usersData.find((el) => el.id === id);
	if (user) {
		console.log(user);
	} else {
		console.log("user doesn't exists");
	}
};

module.exports = {
	add,
	remove,
	update,
	read,
};
