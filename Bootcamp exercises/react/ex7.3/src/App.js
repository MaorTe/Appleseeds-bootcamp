import React from 'react';
import './App.css';
import Button from './components/Button';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { increment: 0, color: '' };
	}
	handleClickInc = () => {
		this.setState({ increment: this.state.increment + 1 });
	};
	handleClickDec = () => {
		this.setState({ increment: this.state.increment - 1 });
	};
	setLabelColor = () => {
		if (this.state.increment > 0) return 'green';
		else if (this.state.increment < 0) return 'red';
		else if (this.state.increment === 0) return 'black';
	};
	render() {
		return (
			<div>
				{this.state.increment <= 10 ? (
					<Button clicked={this.handleClickInc} name="increase"></Button>
				) : (
					this.setState({ increment: 10 })
				)}

				<label style={{ color: this.setLabelColor() }}>
					{this.state.increment}
				</label>

				{this.state.increment >= -10 ? (
					<Button clicked={this.handleClickDec} name="decrease"></Button>
				) : (
					this.setState({ increment: -10 })
				)}
			</div>
		);
	}
}

export default App;
