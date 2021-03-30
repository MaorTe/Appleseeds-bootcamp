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
		const filtered = listItems.filter((item) => !item.isChecked);
		setListItems(filtered);
	};
	//reset
	const handleReset = () => {
		const temp = initItems.map((item) => {
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
