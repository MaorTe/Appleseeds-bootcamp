import React from 'react';

class Box extends React.Component {
	state = { color: 'blue', circle: false };

	componentDidMount() {
		setInterval(this.colorChange, 500);
	}

	colorChange = () => {
		const colors = ['blue', 'red', 'yellow', 'aqua', 'green'];
		let index = colors.indexOf(this.state.color);
		if (index === 4) {
			index = -1;
			this.setState({ circle: true });
		}
		this.setState({ color: colors[index + 1] });
	};

	render() {
		return (
			<div
				className={`box1 ${this.state.color}${
					this.state.circle ? ' circle' : ''
				}`}></div>
		);
	}
}

export default Box;
