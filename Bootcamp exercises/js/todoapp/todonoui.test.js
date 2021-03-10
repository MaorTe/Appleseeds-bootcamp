const { addItem } = require('./todonoui');
const { deleteItem } = require('./todonoui');

// test('Testing if item is added to list', () => {
// 	expect(addItem(1)).toBe(1);
// });

test('Testing if item is removed from list', () => {
	expect(deleteItem(1)).toBe(object);
});
