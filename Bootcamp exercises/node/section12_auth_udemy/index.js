const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down. Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

const jwt = require('jsonwebtoken');

const myFunction = async () => {
	//first argument is the data embedded in my token, inside of it we store unique identifier,second is the secret,third is options
	//the token separated by 3 parts (base64 encoded json string):
	//first part, the "header" contains some meta info about what type of token it is, its a JWT and the algorithm that was used to generate it
	//second part, the "payload/body" contains the data we provided
	//third part, the signature, used to verify the token
	const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
		expiresIn: '7 days',
	});
	console.log(token);

	//first argument is the token we try to verify, second is secret to use if successful returns the data
	const data = jwt.verify(token, 'thisismynewcourse');
	console.log(data);
};

myFunction();

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
	// const task = await Task.findById('5c2e505a3253e18a43e612e6')
	// await task.populate('owner').execPopulate()
	// console.log(task.owner)

	const user = await User.findById('5c2e4dcb5eac678a23725b5b');
	await user.populate('tasks').execPopulate();
	console.log(user.tasks);
};
