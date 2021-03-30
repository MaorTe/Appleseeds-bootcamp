import './App.css';
import React, { useState } from 'react';
import ListItem from './components/ListItem';

const App = () => {
	const items = ['one', 'two', 'three', 'four', 'five'];

	const initItems = items.map((item, index) => {
		return { id: index, name: item, isChecked: false };
	});
	const [listItems, setListItems] = useState(initItems);
	// handle checkbox
	const checkboxChange = (itemID) => {
		const itemsCopy = [...listItems];
		const temp = itemsCopy.find((item) => item.id === itemID);
		temp.isChecked = !temp.isChecked;
		setListItems(itemsCopy);
	};
	// delete
	const handleDelete = () => {
		const itemsLeft = listItems.filter((item) => !item.isChecked);
		setListItems(itemsLeft);
	};
	//reset
	const handleReset = () => {
		const temp = listItems.map((item) => {
			return { ...item, isChecked: false };
		});
		setListItems(temp);
	};
	return (
		<div className="App">
			<button onClick={handleDelete}>Delete</button>
			<button onClick={handleReset}>Reset</button>
			<ul>
				{listItems.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						onCheckboxChange={checkboxChange}
					/>
				))}
			</ul>
		</div>
	);
};
export default App;
