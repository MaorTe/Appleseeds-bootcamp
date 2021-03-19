import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor={this.props.name}>
					{this.props.firstName || this.props.lastName}
				</label>
				<input
					type="text"
					id={this.props.name}
					name={this.props.name}
					onChange={this.props.onChange}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Input;
