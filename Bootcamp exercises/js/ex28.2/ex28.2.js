const obj = {
	name: 'aaa',
	getName: function () {
		console.log(this.name);
	},
	delayedGetName: function () {
		setTimeout(
			function () {
				console.log(this.name);
			}.bind(this),
			1000
		);
	},
};

const binded = obj.delayedGetName.bind(obj);
binded();
