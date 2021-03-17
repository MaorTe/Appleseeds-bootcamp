import React from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

class App extends React.Component {
	mapCheckboxes = () => {
		const label = [
			'I read the term of the app',
			'I accept the term of the app',
			'I want to get the weekly news letter',
			'I want to get sales and offers',
		];
		return label.map((text, i) => {
			return i > 1 ? (
				<Checkbox label={text} checked={true} index={i} />
			) : (
				<Checkbox label={text} index={i} />
			);
		});
	};

	render() {
		return <div>{this.mapCheckboxes()}</div>;
	}
}

export default App;
