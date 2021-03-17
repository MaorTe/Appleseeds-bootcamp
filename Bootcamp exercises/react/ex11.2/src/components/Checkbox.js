import React from 'react';

class Checkbox extends React.Component {
	render() {
		return (
			<div>
				<input
					type="checkbox"
					name={`checkbox${this.props.index}`}
					id={`checkbox${this.props.index}`}
					checked={this.props.checked}
				/>
				<label htmlFor={`checkbox${this.props.index}`}>
					{this.props.label}
				</label>
			</div>
		);
	}
}

export default Checkbox;
