const myBook1 = {
	name: 'A Song of Dark and Light',
	author: 'David W. W. Smith',
	publishYear: 'July 1, 1997',
};
const myBook2 = {
	name: 'A Song of Ice and Fire',
	author: 'George R. R. Martin',
	publishYear: 'July 1, 1996',
};
const bookUtils = {
	getFirstPublished(book1, book2) {
		book1.publishYear < book2.publishYear
			? book1.publishYear
			: book2.publishYear;
	},
	setNewEdition(book, editionYear) {
		book.latestEdition = editionYear;
	},
	setLanguage(book, language) {
		book.language = language;
	},
	setTranslation(book, language, translator) {
		book.translation = { translator, language };
	},
	setPublisher(book, name, location) {
		book.publisher = { name, location };
	},
	isSamePublisher(book1, book2) {
		return (
			book1.publisher.name === book2.publisher.name &&
			book1.publisher.location === book2.publisher.location
		);
	},
};
// console.log(bookUtils.getFirstPublished(myBook1, myBook2));
// console.log(bookUtils.setNewEdition(myBook1, 'gold edition'), myBook1);
// console.log(bookUtils.setLanguage(myBook1, 'spanish'), myBook1);
// console.log(
// 	bookUtils.setTranslation(myBook1, 'spanish', 'generictranslator'),
// 	myBook1
// );
console.log(bookUtils.setPublisher(myBook1, 'name1', 'israel'), myBook1);
console.log(bookUtils.setPublisher(myBook2, 'naedme1', 'israel'), myBook2);
console.log(bookUtils.isSamePublisher(myBook1, myBook2), myBook1, myBook2);
console.log(myBook1, myBook2);
