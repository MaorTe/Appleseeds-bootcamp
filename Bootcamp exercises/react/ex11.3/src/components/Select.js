import React from 'react';

class Select extends React.Component {
	state = { value: 'coconut'};
	render() {
		return (
			<div>
				<label htmlFor="textarea">Age: </label>
				<select value={this.state.value}>
					{/* onChange={prop.handleChange}> */}
					<option value="grapefruit">0-15</option>
					<option value="lime">15-18</option>
					<option value="coconut">18-30</option>
					<option value="mango">30-40</option>
					<option value="mango">over 40</option>
				</select>
			</div>
		);
	}
}

export default Select;
