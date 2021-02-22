const objBook = {
	name: 'A Song of Ice and Fire',
	author: 'George R. R. Martin',
	publishYear: 'July 1, 1996',
	description: 'aaa',
	isRead: true,
};

function output(objBook) {
	return `The book ${objBook.name} was written by ${objBook.author} in the year ${objBook.publishYear}`;
}

console.log(output(objBook));
