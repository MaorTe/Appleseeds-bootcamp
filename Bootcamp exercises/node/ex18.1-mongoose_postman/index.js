const express = require('express');
require('./db/mongoose');
const Product = require('./models/products');
const app = express();

app.use(express.json());

//add a product
app.post('/api/products', async (req, res) => {
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
	try {
		//empty '{}' will find and fetch all users
		const products = await Product.find({});
		res.status(201).send(products);
	} catch (e) {
		//internal server error
		res.status(500).send();
	}
});

//get a specific product
app.get('/api/products/:id', async (req, res) => {
	// const { id } = req.params;
	const _id = req.params.id;
	try {
		const product = await Product.findById(_id);
		if (!product) {
			res.status(404).send({ error: 'No product found' });
		}
		res.status(200).send(product);
	} catch (e) {
		res.status(500).send();
	}
});

//get all products that are active
app.get('/api/products', async (req, res) => {
	const key = Object.keys(req.query)[0];
	const value = Object.values(req.query)[0];
	try {
		//empty '{}' will find and fetch all users
		// const products = await Product.find({
		// 	isActive: true,
		// });
		const products = await Product.find({ [key]: value });
		res.status(201).send(products);
	} catch (e) {
		//internal server error
		res.status(500).send();
	}
});

//get all products with a specific price range
app.get('/api/products', async (req, res) => {
	const { minprice, maxprice } = req.query;
	try {
		const products = await Product.find({
			'details.price': { $gte: minprice, $lte: maxprice },
		});
		res.status(201).send(products);
	} catch (e) {
		res.status(500).send();
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('listening...');
});
