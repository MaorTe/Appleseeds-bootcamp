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
	const { id } = req.params;
	try {
		const product = await Product.findById({ id });
		if (!product) {
			res.status(404).send();
		}
		res.send(200).send(product);
	} catch (e) {
		res.status(500).send();
	}
});

//get all products that are active
app.get('/api/products', async (req, res) => {
	try {
		//empty '{}' will find and fetch all users
		const products = await Product.find({
			isActive: true,
		});
		res.status(201).send(products);
	} catch (e) {
		//internal server error
		res.status(500).send();
	}
});

//get all products with a specific price range
app.get('/api/products', async (req, res) => {
	try {
		//empty '{}' will find and fetch all users
		const products = await Product.find({
			products: { price: { $gte: 50, $lte: 500 } },
		});
		res.status(201).send(products);
	} catch (e) {
		//internal server error
		res.status(500).send();
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('listening...');
});
