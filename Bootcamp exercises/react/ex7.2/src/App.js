import React from 'react';
import './App.css';
import Container from './components/Container';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hidden: true };
	}

	handleClick = () => {
		this.setState((state) => ({
			hidden: !this.state.hidden,
		}));
	};
	render() {
		return (
			<div>
				<Container func={this.handleClick} isclicked={this.state.hidden}></Container>
			</div>
		);
	}
}
export default App;
