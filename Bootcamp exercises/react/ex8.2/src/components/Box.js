import React from 'react';

class Box extends React.Component {
	state = { slideClass: '', show: true };

	componentDidMount() {
		setTimeout(() => this.setState({ slideClass: ' animation' }), 1000);
	}

	componentDidUpdate() {
		setTimeout(() => this.setState({ show: false }), 4000);
	}

	render() {
		return this.state.show ? (
			<div className={`${this.props.class}${this.state.slideClass}`}></div>
		) : null;
	}
}

export default Box;
