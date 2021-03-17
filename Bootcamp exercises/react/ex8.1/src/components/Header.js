import React from 'react';

class Header extends React.Component {
	state = { favoriteColor: 'blue', text: '' };

	componentDidMount() {
		setTimeout(() => this.setState({ favoriteColor: 'green' }), 1000);
	}

	shouldComponentUpdate(nextProps, nextState) {
		nextState.text = `The updated favorite color is ${nextState.favoriteColor}`;
		return true;
	}

	render() {
		return (
			<div>
				<h1>My favorite color is {this.state.favoriteColor}</h1>
				<div>{this.state.text}</div>
			</div>
		);
	}
}

export default Header;
