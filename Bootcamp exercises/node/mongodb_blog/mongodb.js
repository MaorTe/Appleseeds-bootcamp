//storing whats comes back from mongodb library, its an object
// const mongodb = require('mongodb');

//to initialize the connection with need the mongoclient
//it will give us access to connect to the DB so we can perform our basic CRUD operations
// const MongoClient = mongodb.MongoClient;

//same just with destructive assignment
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'users-blog';

// const id = new ObjectID();
//set up the connection,the call back function is gonna get called when we connect to the DB, connecting to the DB is async
MongoClient.connect(
	connectionURL,
	{ useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database');
		}
		//no need to create the DB, mongodb will create it for us
		const db = client.db(databaseName);

		//insertOne is async
		db.collection('users').insertMany(
			[
				{
					name: 'name1',
					age: 26,
				},
				{
					name: 'name2',
					age: 27,
				},
			],
			(error, result) => {
				if (error) {
					return console.log('Unable to insert user');
				}
				//ops is an array of documents in this case an array with 1 document inside
				console.log(result.ops);
			}
		);
		//postUserOwner._id + ''
		db.collection('posts').insertMany([
			{
				title: 'post title',
				text: 'post text',
				tags: [],
				owner: new ObjectID('607ecb6799dd641c349a2d01'),
				comments: [
					{
						_id: 'ObjectID()',
						text: 'comment text',
						owner: new ObjectID('607ecb6799dd641c349a2d02'),
					},
					{},
				],
			},
			{
				title: 'post title2',
				text: 'post text2',
				tags: [],
				owner: '--- postOwner ref',
				comments: [
					{
						_id: 'ObjectID()',
						text: 'comment text2',
						owner: '-- postUserComment ref',
					},
					{},
				],
			},
		]);
		//post owner
		// const postUserOwner = db
		// 	.collection('users')
		// 	.findOne({ name: 'name1' }, (error, user) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}
		// 		console.log(user._id + '');
		// 		console.log(typeof (user._id + ''));
		// 	});

		// //post comment
		// const postUserComment = db
		// 	.collection('users')
		// 	.findOne({ name: 'name2' }, (error, user) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}
		// 		console.log(user);
		// 	});
	}
);
