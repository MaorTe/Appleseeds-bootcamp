import React from 'react';
import './App.css';
import Button from './components/Button';
import Label from './components/Label';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { increment: 0 };
	}
	handleClick = () => {
		this.setState({ increment: this.state.increment + 1 });
	};
	render() {
		return (
			<div>
				<Button clicked={this.handleClick}></Button>
				<Label counter={this.state.increment}></Label>
			</div>
		);
	}
}

export default App;
