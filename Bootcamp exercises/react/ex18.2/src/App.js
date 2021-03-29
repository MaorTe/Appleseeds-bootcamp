import React, { useState } from 'react';
import './App.css';

const App = () => {
	const arr = [
		{ name: 'CSS', completed: true },
		{ name: 'JavaScript', completed: true },
		{ name: 'Learn React', completed: false },
		{ name: 'Learn mongoDB', completed: false },
		{ name: 'Learn Node JS', completed: false },
	];
	const [todoList, setTodoList] = useState(arr);

	const handleChange = (e, i) => {
		todoList[i].completed = e.target.checked;
		let tasks = [...todoList];
		setTodoList(tasks);
	};
	return (
		<div>
			{todoList.map((task, i) => {
				return (
					<div key={task.name}>
						<span className={task.completed && 'line-through'}>
							{task.name}
						</span>
						<span>
							{/* &#10004; &#10008; */}
							<input
								type="checkbox"
								onChange={(e) => handleChange(e, i)}
								defaultChecked={task.completed}
							/>
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default App;
