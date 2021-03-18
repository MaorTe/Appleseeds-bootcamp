import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="input">{this.props.name}</label>
				<input type="text" />
			</div>
		);
	}
}

export default Input;
