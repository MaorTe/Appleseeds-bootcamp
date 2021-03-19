import React from 'react';

class Select extends React.Component {
	state = { value: 'coconut' };
	render() {
		return (
			<div>
				<label htmlFor={this.props.name}>Age: </label>
				<select
					value={this.state.value}
					name={this.props.name}
					id={this.props.name}
					onChange={this.props.onChange}>
					<option value="0-15">0-15</option>
					<option value="16-23">16-23</option>
					<option value="24-30">24-30</option>
					<option value="31-40">31-40</option>
					<option value="over-40">over 40</option>
				</select>
			</div>
		);
	}
}

export default Select;
