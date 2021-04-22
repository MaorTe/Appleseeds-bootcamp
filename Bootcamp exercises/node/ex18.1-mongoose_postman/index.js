const express = require('express');
require('./db/mongoose');
const Product = require('./models/products');
const app = express();

app.use(express.json());

//add a product
app.get('/api/products', async (req, res) => {
	const product = new Product(req.body);
	try {
		await product.save();
		res.status(201).send(product);
	} catch (e) {
		res.status(400).send(e);
	}
});
//get all products
app.get('/api/products', async (req, res) => {
	//empty '{}' will find and fetch all users
	const products = await Product.find({});
	try {
		res.status(201).send(products);
	} catch (e) {
		//internal server error
		res.status(500).send();
	}
});

//get all products
app.post('/api/products/:id', async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById({ id });
	try {
		if (!product) res.status(404).send();
		res.send(200).send(product);
	} catch (e) {
		res.status(500).send();
	}
});

// //get a single movie
// app.get('/api/movies/:id', (req, res) => {
// 	const { id } = req.params;
// 	const movie = findMovie(id);
// 	res.status(200).send(movie);
// });

// //update an existing movie
// app.put('/api/movies/:id', (req, res) => {
// 	const { id } = req.params;
// 	const movieToUpdate = update(id, 'aaa');
// 	res.status(200).send(movieToUpdate);
// });

// //deletes an existing movie
// app.delete('/api/movies/:id', (req, res) => {
// 	const { id } = req.params;
// 	const movieToRemove = remove(id);
// 	res.status(200).send(movieToRemove);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('listening...');
});
