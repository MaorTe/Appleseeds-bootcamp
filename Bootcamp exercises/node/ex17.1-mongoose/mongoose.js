const mongoose = require('mongoose');
const validator = require('validator').default;
mongoose.connect('mongodb://127.0.0.1:27017/products', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

//defining a model
//first argument string name for the module,the second definition of the fields we want
const Product = mongoose.model('Product', {
	// @ts-ignore
	name: {
		type: String,
		required: true,
		trim: true,
	},
	category: {
		type: String,
		required: true,
		trim: true,
	},
	isActive: {
		type: Boolean,
	},
	details: {
		description: {
			type: String,
			required: true,
			trim: true,
			minlength: 10,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
			trim: true,
		},
		discount: {
			type: Number,
			default: 0,
		},
		images: {
			type: Array,
			required: true,
			validate(arr) {
				if (arr.length < 2) {
					throw new Error('must include at least 2 pics');
				}
			},
		},
		phone: {
			type: String,
			validate(value) {
				if (!validator.isMobilePhone(value, 'he-IL')) {
					console.log(value);
					throw new Error('is not a valid israeli phone number!');
				}
			},
			required: [true, 'phone number required'],
		},
		dateAdded: {
			type: Date,
			default: Date.now(),
			validate(value) {
				if (!validator.isDate(value)) {
					console.log(value);
					throw new Error('is not a valid date');
				}
			},
		},
	},
});
//creating an instance of it
const product = new Product({
	name: 'name1',
	category: 'category1',
	isActive: true,
	details: {
		description: 'this is a string with more than 10 letters(1)',
		price: 20,
		// discount:30
		images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
		phone: '+972549402552',
	},
});
const product1 = new Product({
	name: 'name2',
	category: 'category2',
	isActive: true,
	details: {
		description: 'this is a string with more than 10 letters(2)',
		price: 10,
		discount: 30,
		images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
		phone: '+972548901689',
		date: '10/10/2021',
	},
});
const product2 = new Product({
	name: 'name3',
	category: 'category3',
	isActive: false,
	details: {
		description: 'this is a string with more than 10 letters(3)',
		price: 220,
		discount: 50,
		images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
		phone: '+972542634576',
	},
});
//saving this instance to the database
product
	.save()
	.then(() => {
		console.log(product);
	})
	.catch((error) => {
		console.log('Error!', error);
	});

product1
	.save()
	.then(() => {
		console.log(product1);
	})
	.catch((error) => {
		console.log('Error!', error);
	});

product2
	.save()
	.then(() => {
		console.log(product2);
	})
	.catch((error) => {
		console.log('Error!', error);
	});
