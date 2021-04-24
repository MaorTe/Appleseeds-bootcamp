const express = require('express');
// @ts-ignore
const router = new express.Router();
const Product = require('../models/products');

//add a product
router.post('/api/products', async (req, res) => {
	const product = new Product(req.body);
	try {
		await product.save();
		res.status(201).send(product);
	} catch (e) {
		res.status(400).send(e);
	}
});
//get all products
router.get('/api/products', async (req, res) => {
	try {
		//empty '{}' will find and fetch all users
		const products = await Product.find({});
		res.status(201).send(products);
	} catch (e) {
		//internal server error
		res.status(500).send();
	}
});

//get all products with a specific price range
router.get('/api/products/filter/price', async (req, res) => {
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

//get all products that are active
router.get('/api/products/filter/active', async (req, res) => {
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

//get a specific product
router.get('/api/products/:id', async (req, res) => {
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

//update product
router.patch('/api/products/:id', async (req, res) => {
	//lines 77-84:
	//error handling, for the user will not impact the functionality, we were not already able to update properties that didnt exist.
	//its in order to provide the user with more info.
	const updates = Object.keys(req.body);
	const allowedUpdates = Object.keys(Product.schema.obj);
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);
	if (!isValidOperation) {
		return res.status(400).send({ error: 'Invalid updates' });
	}

	try {
		//no need to use $set here, mongoose handles this for us.
		//in the third argument, the options object:
		//{new: true} will return the new product as opposed to the existing one that was found before the update
		//{runValidators:true} if we update a field to something nonexistent it will make sure it fails
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!product) {
			return res.status(404).send({ error: 'Product not found' });
		}
		res.send(product);
	} catch (e) {
		//possible to have server related issue or validation related issue
		res.status(400).send();
	}
});

//delete product
router.delete('/api/products/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) {
			return res.status(404).send({ error: 'No product found' });
		}
		res.send(product);
	} catch (e) {
		res.status(500).send();
	}
});

//delete all products
router.delete('/api/products/:id', async (req, res) => {
	try {
		const products = await Product.deleteMany({});
		if (!products) {
			return res.status(404).send({ error: 'No products found' });
		}
		res.send(products);
	} catch (e) {
		res.status(500).send();
	}
});
module.exports = router;
