const mongoose = require('mongoose');
const validator = require('validator').default;

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

module.exports = Product;
