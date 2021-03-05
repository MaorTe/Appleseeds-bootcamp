const baseEndPoint = `https://api.github.com/users`;
const input = document.querySelector('input');
const form = document.querySelector('#form');
const container = document.querySelector('.details');
const arr = [];

form.addEventListener('submit', (e) => {
	// try {
	let userName = input.value;
	input.value = '';
	e.preventDefault();

	if (userName !== '' && !arr.includes(userName)) {
		getUser(userName).catch((err) => {
			console.log('there was an error fetching user');
			console.error(err);
		});
		arr.push(userName);
	}
	// } catch (err) {
	// 	console.log('there was an error fetching user');
	// 	console.error(err);
	// }
});

async function getUser(userName) {
	const userResponse = await fetch(`${baseEndPoint}/${userName}`);
	console.log(userResponse);
	const user = await userResponse.json();
	console.log(user);

	if (userResponse.status !== 200) throw new Error('not found');

	const img = document.createElement('img');
	const name = document.createElement('p');
	const publicRepos = document.createElement('p');
	const card = document.createElement('div');

	console.log(user);
	img.src = user.avatar_url;
	img.width = 150;
	img.height = 150;
	name.textContent = user.name;
	publicRepos.textContent = user.public_repos;

	container.appendChild(card);
	card.appendChild(img);
	card.appendChild(name);
	card.appendChild(publicRepos);
	card.classList.add('space');
}
